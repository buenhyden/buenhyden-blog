---
date: 2023-10-15T12:46:00+09:00
title: Git 시작하기
description: Git을 시작해보자
nav_weight: 1
nav_icon:
  vendor: bs
  name: book
  color: indigo
authors:
  - Hyunyoun Jo
series:
  - Dev Ops
  - CI/CD
  - Version Control
  - Continuous Integration(CI)
  - Git
categories:
  - Dev Ops
  - CI/CD
  - Version Control
  - Continuous Integration(CI)
  - Git
tags:
  - Dev Ops
  - CI/CD
  - Version Control
  - Continuous Integration(CI)
  - Git
featured: true
images:
  - /images/docs/git-status.png
---

### 특성

- Git은 데이터를 **파일 시스템 스냅샷(snapshot)의 연속**으로 취급하고 크기가 아주 작다.
- Git은 커밋(commit)하거나 프로젝트의 상태를 저장할 때마다 파일이 존재하는 그 순간을 중요하게 여긴다.
  - 파일이 달라지지 않았으면 Git은 성능을 위해서 파일을 새로 저장하지 않고 이전 상태의 파일에 대한 링크만 저장한다.
- Git은 데이터를 저장하기 전에 항상 체크섬(checksum)을 구하고 그 체크섬(checksum)으로 데이터를 관리한다.
  - 체크섬(checksum)을 이해하는 Git없이는 어떠한 파일이나 디렉토리도 변경할 수 없다
  - 체크섬(checksum)은 Git에서 사용하는 가장 기본적인 데이터 단위이자 Git의 기본 철학이다
    - Git없이는 체크섬을 다룰 수 없어서 파일의 상태도 알 수 없고 심지어 데이터를 잃어버릴 수도 없다
- 세 가지 상태

  - Git은 파일을 **Committed, Modified, Staged** 세 가지 상태로 관리하는데 Git 프로젝트의 세 가지 단계와 연결되어 있다.
    |Status Name|Description|
    |-----------|-----------|
    |Committed|데이터가 로컬 데이터베이스에 안전하게 저장됐다는 것을 의미|
    |Modified|수정한 파일을 아직 로컬 데이터베이스에 커밋하지 않은 것을 의미|
    |Staged|현재 수정한 파일을 곧 커밋할 것이라고 표시한 상태|
