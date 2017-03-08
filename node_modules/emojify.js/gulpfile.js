var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    path = require('path'),
    minimatch = require('minimatch'),
    through2 = require('through2'),
    del      = require('del'),
    inquirer = require('inquirer'),
    sprite = require('css-sprite').stream;


var paths = {
    dist: {
        root: './dist'
    }
};
paths.dist.scripts = path.join(paths.dist.root, 'js');
paths.dist.styles = { root: path.join(paths.dist.root, 'css') };
paths.dist.styles.dataURI = path.join(paths.dist.styles.root, 'data-uri');
paths.dist.styles.sprites = path.join(paths.dist.styles.root, 'sprites');
paths.dist.styles.basic = path.join(paths.dist.styles.root, 'basic');
paths.dist.images = { root: path.join(paths.dist.root, 'images') };
paths.dist.images.separate = path.join(paths.dist.images.root, 'basic');
paths.dist.images.sprites = path.join(paths.dist.images.root, 'sprites');

gulp.task('default', ['compile']);

gulp.task('compile', ['script', 'images-and-styles']);

gulp.task('release', ['update', 'compile', 'bump']);

gulp.task('script', function(){
    var pkg = require('./package.json');

    gulp.src('./src/emojify.js')
        .pipe(gulp.dest(paths.dist.scripts))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.insert.prepend('/*! ' + pkg.name + ' - v' + pkg.version + ' - \n' +
            ' * Copyright (c) Hassan Khan ' + new Date().getFullYear() + '\n' +
            ' */'))
        .pipe($.uglify({
            preserveComments: 'some'
        }))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dist.scripts));
});

var getEmoticonFilter = function(){
    var emoticons = [
        'smile', 'scream', 'smirk', 'grinning', 'stuck_out_tongue_closed_eyes', 'stuck_out_tongue_winking_eye',
        'rage', 'frowning', 'sob', 'kissing_heart', 'wink', 'pensive', 'confounded', 'flushed', 'relaxed', 'mask',
        'heart', 'broken_heart'
    ];

    return $.filter(function(file){
        var index = emoticons.indexOf(path.basename(file.path, path.extname(file.path)));
        if(index > -1){
            emoticons.splice(index, 1);
            return true;
        }
    })
};

gulp.task('images-and-styles', ['copy-styles', 'data-uri'], function(){


    var emoticonFilter = getEmoticonFilter(),
        cssFilter = $.filter('**.css'),
        emoticonCssFilter = $.filter('**.css'),
        emoticonPngFilter = $.filter('**.png');

    return gulp.src('./src/images/emoji/*.png')

        // copy images over as they are

        .pipe(gulp.dest(paths.dist.images.separate))

        // generate emoticon sprites

        .pipe(emoticonFilter)
        .pipe(sprite({
            name: 'emojify-emoticons',
            style: 'emojify-emoticons.css',
            prefix: 'emoji',
            cssPath: '../../images/sprites/',
            orientation: 'binary-tree',
            retina: true,
            template: './build/sprites.mustache'
        }))
        .pipe(emoticonCssFilter)
        .pipe($.replace('.emoji-+1', '.emoji-plus1'))
        .pipe(gulp.dest(paths.dist.styles.sprites))
        .pipe($.minifyCss())
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dist.styles.sprites))
        .pipe(emoticonCssFilter.restore())
        .pipe(emoticonPngFilter)
        .pipe(gulp.dest(paths.dist.images.sprites))
        .pipe(emoticonPngFilter.restore())
        .pipe($.filter('!**sprites**')) //exclude generated spritesheets
        .pipe(emoticonFilter.restore())

        // generate all sprites

        .pipe(sprite({
            name: 'emojify',
            style: 'emojify.css',
            prefix: 'emoji',
            cssPath: '../../images/sprites/',
            orientation: 'binary-tree',
            retina: true,
            template: './build/sprites.mustache'
        }))
        .pipe(cssFilter)
        .pipe($.replace('.emoji-+1', '.emoji-plus1'))
        .pipe(gulp.dest(paths.dist.styles.sprites))
        .pipe($.minifyCss())
        .pipe($.rename({
             suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dist.styles.sprites))
        .pipe(cssFilter.restore())
        .pipe($.filter('**.png'))
        .pipe(gulp.dest(paths.dist.images.sprites));
});

gulp.task('data-uri', function(){
    var emoticonFilter = getEmoticonFilter();

    return gulp.src('./src/images/emoji/*.png')
        .pipe($.imageDataUri({
            customClass: function(className){
                return 'emoji-' + className
            }
        }))
        .pipe(emoticonFilter)
        .pipe($.concat('emojify-emoticons.css'))
        .pipe($.replace('.emoji-+1', '.emoji-plus1'))
        .pipe(gulp.dest(paths.dist.styles.dataURI))
        .pipe($.minifyCss())
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dist.styles.dataURI))
        .pipe(emoticonFilter.restore())

        // generate all data-URIs

        .pipe($.concat('emojify.css'))
        .pipe($.replace('.emoji-+1', '.emoji-plus1'))
        .pipe(gulp.dest(paths.dist.styles.dataURI))
        .pipe($.minifyCss())
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dist.styles.dataURI));
});

gulp.task('copy-styles', function(){
    gulp.src('./src/css/basic/*.css')
        .pipe(gulp.dest(paths.dist.styles.basic))
        .pipe($.minifyCss())
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dist.styles.basic));
});

gulp.task('clean', function(done){
    del(paths.dist.root, done);
});


gulp.task('bump', function(done){
    inquirer.prompt({
        type: 'list',
        name: 'bump',
        message: 'What type of bump would you like to do?',
        choices: ['patch', 'minor', 'major', "don't bump"]
    }, function(result){
        if(result.bump === "don't bump"){
            done();
            return;
        }

        gulp.src(['./bower.json', './package.json'])
            .pipe($.bump({type: result.bump}))
            .pipe(gulp.dest('./'))
            .on('end', done);
    });
});

gulp.task('update', function(done){
    var emoji = '';

    del('./src/images/emoji');

    $.download('https://github.com/arvida/emoji-cheat-sheet.com/archive/master.zip')
        .pipe($.unzip())
        .pipe($.filter(function(file){
            return minimatch(file.path, '**/public/graphics/emojis/*.png');
        }))
        .pipe($.rename({ dirname: './' }))
        .pipe(gulp.dest('./src/images/emoji'))
        .pipe(through2({ objectMode: true }, function(file, enc, cb){
            emoji += ',' + path.basename(file.path, path.extname(file.path));
            this.push(file);
            cb();
        }, function(){
            gulp.src('./src/emojify.js')
                .pipe($.replace(/(\/\*##EMOJILIST\*\/).+$/m, '$1"' + emoji.substr(1) + '";'))
                .pipe(gulp.dest('./src'))
                .on('end', done);
        }));
});
