---
type: notes
title: Portainer 설치
description: Web GUI 기반 Container 관리 툴
linkTitle: Portainer 설치
date: 2023-11-23T09:49:52.650Z
lastmod: 2023-12-09T06:21:06.074Z
nav_weight: 1
nav_icon:
  vendor: bs
  name: book
  color: blue
tags:
  - Container
  - Dev Ops
  - Docker
  - Portainer
categories:
  - Container
  - Dev Ops
  - Portainer
  - Docker
series:
  - Dev Ops
  - Container
featured: false
images: ""
authors: Hyunyoun Jo
draft: published
---

## Portainer란?

- Web GUI 기반 Container 관리 툴
- Portainer를 통해 여러 개의 Container를 한 곳에서 모니터링, 관리

## Portainer 설치

1. Host간 볼륨 매칭을 위한 디렉토리 생성

```bash
mkdir -p /kubernetes/portainer_data
```

2. Portainerdmf docker run 명령어를 통해 docker에 설치
   위에서 생성한 폴더와 마운트

```bash
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /kubernetes/portainer_data:/data portainer/portainer-ce:latest
```

3. Portainer 로그인
   웹브라우저 Portainer 서버(예: <http://서버IP:9000)에> 접근
   [처음 접속시]
   username과 password 입력
   ![Portainer 로그인](/dev-ops/portainer-1.png)

4. Harbor와 Portainer 연동
   1. 좌측의 Settings 아래에 Registies를 클릭하고 우측에 Add registry를 클릭
      ![Harbor와 Portainer 연동 1](/dev-ops/portainer-2.png)
   2. Custom registry 클릭후, Name과 Registry URL을 입력.
      Harbor는 <https://dev.eq4all.co.kr:5000에> 연결되어 있어 이를 넣으면 됨
      public이 아니므로, Authentication 입력이 필요
      Harbor의 username과 password 입력
      ![Harbor와 Portainer 연동 2](/dev-ops/portainer-3.png)

## Reference

[Portainer Official Homepage](https://www.portainer.io/)
