---
title: Kafka
date: 2023-10-22T02:46:00+09:00
description: 아파치 소프트웨어 재단이 스칼라로 개발한 오픈 소스 메시지 브로커 프로젝트이다. 이 프로젝트는 실시간 데이터 피드를 관리하기 위해 통일된, 높은 처리량, 낮은 지연시간을 지닌 플랫폼을 제공
summary: 아파치 소프트웨어 재단이 스칼라로 개발한 오픈 소스 메시지 브로커 프로젝트이다. 이 프로젝트는 실시간 데이터 피드를 관리하기 위해 통일된, 높은 처리량, 낮은 지연시간을 지닌 플랫폼을 제공
linkTitle: Kafka
series:
  - Message Broker
categories:
  - Backend
  - Message Broker
tags:
  - Kafka
lastmod: 2024-01-03T22:19:00
draft: false
featured: true
authors:
  - Hyunyoun Jo
---

![Kafka](media/images/kafka.png "https://www.uber.com/en-ZA/blog/ureplicator-apache-kafka-replicator/")

## Reference

[Kafka Official Homepage](https://kafka.apache.org/)  
[Confluent Homepage](https://www.confluent.io/)  
[카프카 생태계 기반의 비즈니스 메트릭 생성하기](https://hyperconnect.github.io/2022/10/14/grafana-with-ksqlDB.html)  
[ksqlDB Deep Dive](https://hyperconnect.github.io/2023/03/20/ksqldb-deepdive.html)  
[[Kafka] 카프카 기본 개념\_1 (브로커, 프로듀서, 컨슈머, 메시지 + 주키퍼)](https://unit-15.tistory.com/135)  
[[Kafka] 카프카 기본 개념\_2 (토픽, 파티션, 세그먼트, 리플리케이션, 리더-팔로워)](https://unit-15.tistory.com/136)  
[[Kafka] 카프카 기본 개념\_3 (소스 커넥트, 싱크 커넥트, 커넥터)](https://unit-15.tistory.com/137)  
[[Kafka] 파티션 키를 사용하여 특정 파티션으로 메시지 적재하기](https://devocean.sk.com/search/techBoardDetail.do?ID=164096&boardType=)  
[[Kafka] Docker Compose로 멀티브로커 Kafka 구성하기](https://devocean.sk.com/search/techBoardDetail.do?ID=164016&boardType=)  
[[Kafka] Docker Compose 를 이용하여 Single Broker 구성하기](https://devocean.sk.com/search/techBoardDetail.do?ID=164007&boardType=)  
[Kafka-UI Tool 을 이용하여 Kafka 관리하기](https://devocean.sk.com/search/techBoardDetail.do?ID=163980&boardType=)  
[간단한 카프카 환경 구성하기](https://devocean.sk.com/search/techBoardDetail.do?ID=163709&boardType=)  
[카프카 커넥트를 데이터 파이프라인으로 사용하는 이유? kafka-sink-connector 오픈소스 언빡싱!](https://tech.kakao.com/2023/01/12/introduce-kafka-sink-connector/)  
[카카오 개발자들을 위한 공용 Message Streaming Platform – Kafka & RabbitMQ](https://tech.kakao.com/2021/12/23/kafka-rabbitmq/)  
[Live11 과 Schema Registry](https://11st-tech.github.io/2022/06/28/schema-registry-in-live11/)  
[Kafka 이벤트 모니터링이란.. (먼산)](https://dev.gmarket.com/51)  
[확장성 높은 카프카 구성을 위한 서비스 설계](https://dev.gmarket.com/35)  
[Kafka에서 파티션 증가 없이 동시 처리량을 늘리는 방법 - Parallel Consumer](https://d2.naver.com/helloworld/7181840)  
[messaging-hub 트러블 슈팅](https://engineering.linecorp.com/ko/blog/messaing-hub-troubleshooting)  
[Kafka 사용이유 ( vs RabbitMQ )](https://ellune.tistory.com/29)  
[Kafka 기본 개념 (토픽, 파티션, 성능, 고가용성, 프로듀서, 컨슈머) 출처: https://sjh836.tistory.com/186 [빨간색코딩:티스토리]](https://sjh836.tistory.com/186)  
[Airbnb의 이벤트 로그 처리](https://brunch.co.kr/@sonjoosik/3)  
[Kafka와 MongoDB, Kubernetes로 유연하고 확장 가능한 LINE 쇼핑 플랫폼 구축하기](https://engineering.linecorp.com/ko/blog/line-shopping-platform-kafka-mongodb-kubernetes)  
[회원시스템 이벤트기반 아키텍처 구축하기](https://techblog.woowahan.com/7835/)  
[[Kafka KRU] 2023 스터디 후기 및 커스텀 카프카 커넥터 만들기](https://devocean.sk.com/search/techBoardDetail.do?ID=165493&boardType=)  
[[Kafka KRU] 2023 스터디 후기 및 카프카 성능 관련 이야기](https://devocean.sk.com/search/techBoardDetail.do?ID=165500&boardType=)  
[[Kafka KRU] Consumer 내부 동작 원리와 구현](https://devocean.sk.com/blog/techBoardDetail.do?ID=165478&boardType=tags)  
[ksqlDB를 활용한 CDC (Change Data Capture) 효과 내기](https://devocean.sk.com/blog/techBoardDetail.do?ID=164794&boardType=tags)  
[pub/sub 기능을 활용하여 로컬 캐시 동기화하기](https://devocean.sk.com/blog/techBoardDetail.do?ID=164373&boardType=tags)  
[kafkaAdminClient API를 이용한 kafka Managing 서비스 개발](https://devocean.sk.com/blog/techBoardDetail.do?ID=164372&boardType=tags)  
[카오스 엔지니어링 한스푼 추가한 Kafka MM2 성능 테스트!](https://devocean.sk.com/blog/techBoardDetail.do?ID=164371&boardType=tags)  
[kcat(kafkacat) 소개](https://devocean.sk.com/blog/techBoardDetail.do?ID=163970&boardType=tags)  
[Kafka 메시지에 스키마를 정의해 보자 : Apache Avro](https://medium.com/team-joon/%EC%B9%B4%ED%94%84%EC%B9%B4-%EB%A9%94%EC%8B%9C%EC%A7%80%EC%97%90-%EC%8A%A4%ED%82%A4%EB%A7%88%EB%A5%BC-%EC%A0%95%EC%9D%98%ED%95%B4-%EB%B3%B4%EC%9E%90-apache-avro-7162e250ae69)
