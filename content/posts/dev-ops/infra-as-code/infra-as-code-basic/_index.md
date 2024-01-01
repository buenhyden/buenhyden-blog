---
title: Infrastructure as Code Basic
date: 2023-10-15T12:46:00+09:00
linkTitle: Infrastructure as Code Basic
series:
  - Dev Ops
  - Infrastructure as Code
categories:
  - Dev Ops
  - Infrastructure as Code
tags:
  - Dev Ops
  - Infrastructure as Code
lastmod: 2023-12-10T03:12:45.994Z
draft: false
featured: true
---

![Infrastructure as Code](media/images/infra-as-code.png "https://www.linkedin.com/pulse/cisco-network-devices-backup-configuration-using-ansible-samy-2xccie")

|                             | Chef          | Puppet        | Ansible     | SaltStack   | Terraform    |
| --------------------------- | ------------- | ------------- | ----------- | ----------- | ------------ |
| Cloud                       |               | All           | All         | All         | All          |
| Type                        | Config Mgmt   | Config Mgmt   | Config Mgmt | Config Mgmt | Orchestraion |
| Infrastructure              | Mutable       | Mutable       | Mutable     | Mutable     | Immutable    |
| Language                    | Procedural    | Declarative   | Procedural  | Declarative | Declarative  |
| Architecture                | Client/Server | Client/Server | Client only | Client only | Client only  |
| Orchestration               |               |               |             |             |              |
| Lifecyle (state) management | No            | No            | No          | No          | Yes          |
| VM provisioning             | Partial       | Partial       | Partial     | Partial     | Yes          |
| Networking                  | Partial       | Partial       | Partial     | Partial     | Yes          |
| Storage Management          | Partial       | Partial       | Partial     | Partial     | Yes          |
| Configureation              |               |               |             |             |              |
| Packaging                   | Yes           | Yes           | Yes         | Yes         | Partial[^1]  |
| Templating                  | Yes           | Yes           | Yes         | Yes         | Partial[^1]  |
| Servvice provisioning       | Yes           | Yes           | Yes         | Yes         | Partial[^1]  |

[^1]: Using CloudInit

## Reference

[Ansible과 Rundeck을 활용한 서버 작업 자동화 및 권한 제어](https://techblog.lycorp.co.jp/ko/improve-operation-environment-with-rundeck)  
[Ansible vs Terraform vs Puppet 차이점 및 선택](https://rainbound.tistory.com/entry/Ansible-vs-Terraform-vs-Puppet-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EB%B0%8F-%EC%84%A0%ED%83%9D)  
[Chef Vs Puppet Vs Ansible – Comparison of DevOps Configuration Management Tools](https://www.veritis.com/blog/chef-vs-puppet-vs-ansible-comparison-of-devops-management-tools/)  
[[코드로서의 인프라] Ansible, Terraform, Puppet 어떤 것을 선택해야 할까?](https://data-engineer-tech.tistory.com/6)  
[[DevOps] Terraform, Ansible 그리고 Chef - 어느 것이 폐쇄망에 적합한가?](https://velog.io/@kimh4nkyul/DevOps-Terraform-Ansible-%EA%B7%B8%EB%A6%AC%EA%B3%A0-Chef-%EC%96%B4%EB%8A%90-%EA%B2%83%EC%9D%B4-%ED%8F%90%EC%87%84%EB%A7%9D%EC%97%90-%EC%A0%81%ED%95%A9%ED%95%9C%EA%B0%80)  
[Ansible과 Rundeck을 활용한 서버 작업 자동화 및 권한 제어](https://techblog.lycorp.co.jp/ko/improve-operation-environment-with-rundeck)  
[유연하고 안전하게 배포 Pipeline 운영하기](https://toss.tech/article/slash23-devops?ref=codenary)
