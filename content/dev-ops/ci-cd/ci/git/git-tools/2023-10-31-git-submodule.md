---
type: docs
title: Git Submodule
date: 2023-10-31T07:46:00+09:00
description: Git Submodule
nav_weight: 3
nav_icon:
  vendor: bs
  name: book
  color: indigo
authors:
  - Hyunyoun Jo
series:
  - CI/CD
  - Dev Ops
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
lastmod: 2023-11-12T15:25:49.998Z
---

프로젝트 수행중 다른 프로젝트를 함께 사용해야할 경우가 종종 있다. 함께 사용할 다른 프로젝트는 외부에서 개발한 라이브러리라던가 내부 여러 프로젝트에서 공통으로 사용할 라이브러리일 수 있다.
이런 상황에서 자주 생기는 잇슈는 두 프로젝트를 서로 별개로 다루면서도 그 중 하나를 다른 하나 안에서 사용할 수 있어야 한다는 것.

### Submodule이란?

Git 저장소 안에 다른 Git 저장소를 디렉토리로 분리해 넣는 것
다른 독립된 Git 저장소를 Clone해 내 Git 저장소 안에 포함할 수 있으며 각 저장소의 Commit은 독립적으로 관리

## Reference

[Git Submodule](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88)
