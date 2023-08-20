#!/bin/bash

# README.md 파일로 출력 리다이렉트 시작
exec > README.md

# Markdown 테이블 헤더 출력
echo "| Index | File Name |"
echo "|-------|-----------|"

# 현재 디렉터리의 파일 이름들을 인덱스와 함께 출력
index=1
for filename in *; do
    if [ -f "$filename" ]; then  # 디렉터리에서 파일만 선택
        echo "| $index | $filename |"
        ((index++))
    fi
done
