#!/bin/bash

echo "Select a Level: 0, 1, 2"
read level

echo "Enter the name of the file you created or modified:"
read filename

dir_name="LV$level"

if [ ! -d "$dir_name" ]; then
    echo "Error: Directory $dir_name does not exist."
    exit 1
fi

cd $dir_name

exec 3>&1           
exec > README.md    

echo "| 순서 | 문제 |"
echo "|-------|-----------|"

index=1
for file in *; do
    if [ -f "$file" ] && [ "$file" != "README.md" ]; then  
        echo "| $index | $file |"
        ((index++))
    fi
done

exec 1>&3
exec 3>&-

cd ..

if [ ! -d ".git" ]; then
    echo "Error: This is not a git repository."
    exit 1
fi

git add .
git commit -m "$dir_name: add $filename"
git push
