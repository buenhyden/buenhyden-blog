---
type: notes
title: Cross Origin Resource Sharing(CORS)
description: 추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제
linkTitle: Cross Origin Resource Sharing(CORS)
date: 2023-11-15T14:17:29.812Z
lastmod: 2023-12-09T06:00:12.512Z
nav_weight: 4
nav_icon:
  vendor: bs
  name: book
  color: blue
tags:
  - Computer Science
  - Network
  - Network Basic
  - CORS
categories:
  - Computer Science
  - Network
  - Network Basic
  - CORS
series:
  - Computer Science
  - Network
featured: false
images: ""
authors: Hyunyoun Jo
draft: in progress
---

![CORS](/computer-science/cors.png?width=1024px#center "https://securityzines.com/flyers/cors.html")

## CORS Principle

![CORS Principle](/computer-science/cors_principle.png?width=1024px#center "https://medium.com/@jiri.caga/issue-call-put-method-on-rest-api-write-in-spring-framework-cross-origin-request-blocked-c68f9390b9b1")

## What is CORS?

- **HTTP-based security mechanism** controlled and enforced by the client (Web Browser)
  - 웹 페이지 상의 제한된 리소스를 최초 자원이 서비스된 도메인 밖의 다른 도메인으로부터 요청할 수 있게 허용하는 구조

### How does it work?

## What is a CORS preflight?

![CORS preflight scheme Server Client](/computer-science/cors-preflight-scheme-server-client.jpg?width=768px#center)

## CORS Headers

![Browser Server preflight request and esponse Headers](/computer-science/browser-server-preflight-request-and-response-headers.jpg?width=768px#center "https://simplelocalize.io/blog/posts/what-is-cors/")

## Why is request blocked by CORS policy?

## How to fix CORS error?

![Response preflight request doesnt pass access control check](/computer-science/response-preflight-request-doesnt-pass-access-control-check.jpg?width=768px#center "https://simplelocalize.io/blog/posts/what-is-cors/")

### Configure a server

### Install a browser extension

![CORS preflight Browser extension solution](/computer-science/cors-preflight-browser-extension-solution.jpg?width=768px#center "https://simplelocalize.io/blog/posts/what-is-cors/")

### Disable browser CORS checks

![Disble CORS preflight in Web Browser](/computer-science/disabled-cors-preflight-in-web-browser.jpg?width=768px#center "https://simplelocalize.io/blog/posts/what-is-cors/")

### Set up proxy Server

![CORS preflight Porxy server solution](/computer-science/cors-preflight-proxy-server-solution.jpg?width=768px#center "https://simplelocalize.io/blog/posts/what-is-cors/")

## Reference

[MDN WEB DOCS](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)  
[simplelocalize.io](https://simplelocalize.io/blog/posts/what-is-cors/)  
[CORS는 왜 이렇게 우리를 힘들게 하는 걸까?](https://yozm.wishket.com/magazine/detail/1225/)
