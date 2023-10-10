#!/bin/bash

# 사용자에게 Level 선택하게 합니다.
echo "Select a Level: LV0, LV1, LV2"
read level

# 사용자에게 파일 이름 입력 받기
echo "Enter the name of the file you created or modified:"
read filename

# 선택한 폴더로 이동
cd $level

# README.md 파일로 출력 리다이렉트 시작
exec 3>&1           # 파일 디스크립터 저장 (화면 출력 저장)
exec > README.md    # 표준 출력을 README.md로 리다이렉트

# Markdown 테이블 헤더 출력
echo "| 순서 | 문제 |"
echo "|-------|-----------|"

# 현재 디렉터리의 파일 이름들을 인덱스와 함께 출력
index=1
for file in *; do
    if [ -f "$file" ] && [ "$file" != "README.md" ]; then  # 디렉터리에서 파일만 선택하되, README.md는 제외
        echo "| $index | $file |"
        ((index++))
    fi
done

# 표준 출력을 원래대로 복구
exec 1>&3
exec 3>&-

# 원래 디렉터리로 돌아오기 (선택한 폴더에서 나오기)
cd ..

# 파일을 git에 추가 및 커밋
git add "$level/$filename" "$level/README.md"
git commit -m "$level: add $filename"
git push
