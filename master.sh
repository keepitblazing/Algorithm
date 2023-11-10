#!/bin/bash

echo "Select a Level: 0, 1, 2"
read level

echo "Enter the name of the file you created or modified (without extension):"
read filename

dir_name="LV$level"

if [ ! -d "$dir_name" ]; then
    echo "Error: Directory $dir_name does not exist."
    exit 1
fi

cd $dir_name

exec 3>&1
exec > README.md

if [ "$level" -eq 0 ]; then
    echo "| 순서 | 문제 | JS | Java |"
    echo "|-------|-----------|-----|------|"
else
    echo "| 순서 | 문제 |"
    echo "|-------|-----------|"
fi

index=1
for file in *; do
    if [ -f "$file" ] && [ "$file" != "README.md" ]; then
        if [ "$level" -eq 0 ]; then
            js_mark="X"
            java_mark="X"

            [[ -f "${file}.js" ]] && js_mark="O"
            [[ -f "${file}.java" ]] && java_mark="O"

            echo "| $index | $file | $js_mark | $java_mark |"
        else
            echo "| $index | $file |"
        fi
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

file_extension=""
if [ "$level" -eq 0 ]; then
    file_extension=".js"
elif [ "$level" -eq 1 ]; then
    file_extension=".java"
fi

git add .
git commit -m "$dir_name: add $filename$file_extension"
git push
