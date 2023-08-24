#!/bin/bash

git add .

# 사용자에게 Level 선택하게 합니다.
echo "Select a Level: LV0, LV1, LV2"
read level

# 사용자에게 작업 유형을 선택하게 합니다.
echo "Select an action: solve, docs"
read action

# 'solve'를 선택했을 경우
if [ "$action" == "solve" ]; then
    echo "Enter the problem name you solved:"
    read problem_name

    # 커밋 메시지 생성
    git add "${problem_name}.js"
    git commit -m "$level : add ${problem_name}.js"
elif [ "$action" == "docs" ]; then
    # 커밋 메시지 생성
    git add "README.md"
    git commit -m "$level: update README"
else
    echo "Invalid action selected!"
fi
