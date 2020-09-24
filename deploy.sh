#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成文件 && 部署到腾讯云
cloudbase framework:deploy

# 发布生成的文件
# cd docs

# git init
# git add -A
# git commit -m 'deploy'

# git push -f git@github.com:JackyAndroid/AndroidInterview-Q-A.git master:gh-pages

# cd -

# 发布主分支的内容
git add -A
git commit -m 'update content.'
git push origin