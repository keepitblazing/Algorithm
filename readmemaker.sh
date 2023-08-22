#!/bin/bash

# 사용자에게 Level 선택하게 합니다.
echo "Select a Level: LV0, LV1, LV2"
read level

# 선택한 폴더로 이동
cd $level

# README.md 파일로 출력 리다이렉트 시작
exec > README.md

# Markdown 테이블 헤더 출력
echo "| 순서 | 문제 |"
echo "|-------|-----------|"

# 현재 디렉터리의 파일 이름들을 인덱스와 함께 출력
index=1
for filename in *; do
    if [ -f "$filename" ] && [ "$filename" != "README.md" ]; then  # 디렉터리에서 파일만 선택하되, README.md는 제외
        echo "| $index | $filename |"
        ((index++))
    fi
done

# 원래 디렉터리로 돌아오기 (선택한 폴더에서 나오기)
cd ..
