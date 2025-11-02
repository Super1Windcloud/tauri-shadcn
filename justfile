default: 
    echo 'Hello, world!'

clear:
  git rm --cached -r .

push:
  git add .
  git commit -m "update"
  git push repo main

tag:
  just push
  git tag $(node -p "require('./package.json').version")
  git push origin $(node -p "require('./package.json').version")
