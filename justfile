default:
    echo 'Hello, world!'


clear :
    git rm --cached -r .

push :
    git add .
    git commit -m "update"
    git push repo main 



tag:
    just push
    version=$(node -p "require('./package.json').version")
    git tag $version
    git push repo $version