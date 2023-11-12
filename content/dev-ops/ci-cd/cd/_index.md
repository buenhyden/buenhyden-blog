---
type: docs
title: Continuous Deployment(CD)
date: 2023-10-15T12:46:00+09:00
description: 지속적인 배포
linkTitle: Continuous Deployment(CD)
nav_weight: 2
nav_icon:
  vendor: bs
  name: book
  color: indigo
featured: true
series:
  - CI/CD
  - Dev Ops
categories:
  - Dev Ops
  - CI/CD
  - Continuous Deployment(CD)
tags:
  - Dev Ops
  - CI/CD
  - Continuous Deployment(CD)
lastmod: 2023-11-12T15:22:58.962Z
---

![CD](/dev-ops/cd.png?width=512px#center)

- 지속적인 서비스 제공(Continuous Delivery) 또는 지속적인 배포(Continuous Deployment)를 의미하며 이는 상호 교환적으로 사용된다.
- 두 가지 의미 모두 파이프라인의 추가 단계에 대한 자동화를 뜻하지만 때로는 얼마나 많은 자동화가 이루어지고 있는지를 설명하기 위해 별도로 사용되기도 한다.
- 지속적 배포는 빌드, 테스트 및 배포 단계를 자동화하는 DevOps 방식을 논리적 극한까지 끌어 올린다.
  - 코드 변경이 파이프라인의 이전 단계를 모두 성공적으로 통과하면 수동 개입없이 해당 변경 사항이 프로덕션에 자동으로 배포
- 입증된 통합 및 지속적인 전달 단계를 기반으로 한다.
  - 간단한 코드 변경이 정기적으로 마스터에 Commit되고, 자동화된 빌드 및 테스트 프로세스를 거치며 다양한 사전 프로덕션 환경으로 승격되며, 문제가 발견되지 않으면 최종적으로 배포

## Reference

[SH's Devlog](https://seosh817.tistory.com/104)
