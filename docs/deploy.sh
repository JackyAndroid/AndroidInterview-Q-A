#!/bin/bash
gitbook build ./  docs
git add .
git commit -m "Update Content"
git push origin
git push coding

echo "Deploy Success!"