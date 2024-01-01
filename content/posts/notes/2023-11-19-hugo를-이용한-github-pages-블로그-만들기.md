---
title: Hugo를 이용한 GitHub Pages 블로그 만들기
linkTitle: Hugo를 이용한 GitHub Pages 블로그 만들기
description: ""
date: 2023-11-19T12:05:42.431Z
tags:
  - Blog
  - Hugo
  - Go
categories:
  - Blog
  - Hugo
  - Go
series:
  - Notes
  - Blog
authors:
  - Hyunyoun Jo
lastmod: 2023-12-10T04:01:09.242Z
draft: false
keywords:
  - Github Pages
  - hugo
  - Dev Blog
featured: true
---

## Prerequisites

Chocolatey 설치가 되었다는 가정 아래 진행.  
[Chocolatey 설치]({{< relref "posts/computer-science/os/windows/2023-11-21-chocolatey.md" >}})

### Build Tools

#### Go

- HB is a modular framework, requires Go installation to download and upgrade Hugo Modules.

##### GoLang 설치

```powershell
choco install golang
```

#### Hugo

- HB uses Hugo Pipes to compile SCSS, so an extended version of Hugo is required.

##### hugo 설치

```powershell
choco install hugo
```

##### hugo-extended 설치

```powershell
choco install hugo-extended
```

#### Git

- The version control system, can be fetched on the downloads page.

##### git 설치

```powershell
choco install git
```

#### Node.js

- Requires Node.js 16 or later.

##### Node.js 설치

```powershell
choco install nodejs
```

## Reference

[Hugo Official Homepage](https://gohugo.io/)  
[Hugo Modules](https://hugomods.com/)  
[Hugo와 Gitlab Pages로 정적 웹페이지 구현하고 배포하기](https://devocean.sk.com/blog/techBoardDetail.do?ID=165251&ref=codenary)
