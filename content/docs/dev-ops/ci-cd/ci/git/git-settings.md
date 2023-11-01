---

title: Git 설정하기
date: 2023-10-16T11:52:00+09:00
description: Git을 초기 설정해보자
nav_weight: 3
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
- /images/docs/git-init.jpg

---

## Git 설정하기

- Git을 설치하고 나면 Git의 사용 환경을 적절하게 설정해 주어야 한다
- 환경 설정은 한 컴퓨터에서 한 번만 하면 되며, 설정한 내용은 Git을 업그레이드해도 유지되고, 언제든지 다시 바꿀 수 있는 명령어도 있다.
- **git config**라는 도구로 설정 내용을 확인하고 변경할 수 있다
  - git은 이 설정에 따라 동작한다
  - 사용하는 설정 파일은 세 가지나 된다
    - /etc/gitconfig
      - 시스템의 모든 사용자와 모든 저장소에 적용되는 설정
      - git config —system 옵셥으로 이 파일을 읽고 쓸 수 있다
    - \~/.gitconfig, ~/config/git/config
      - 특정 사용자에게만 적용되는 설정
      - git config —global 옵션으로 이 파일을 일고 쓸 수 있다.
      - 특정 사용자의 모든 저장소 설정에 적용
    - .git/config
      - Git 디렉토리에 있고 특정 저장소(혹은 현재 작업 중인 프로젝트)에만 적용된다.
      - —local 옵션을 사용하면 이 파일을 사용하도록 지정할 수 있다
  - 각 설정은 역순으로 우선시된다.

### **사용자 정보**

````
- Git을 설치하고 나서 가장 먼저 해야 하는 것은 사용자 이름과 이메일 주소를 설정하는 것이다.
    - Git은 커밋할 때마다 이 정보를 사용한다.
    - 한번 커밋한 후에는 정보를 변경할 수 없다.

    ```
    git config --global user.name "John Doe"
    git config --global user.email johndoe@example.com
    ```
````

### 편집기 설정

````
- Git에서 사용할 텍스트 편집기를 고른다.
- 기본적으로 Git은 시스템의 기본 편집기를 사용한다

```
git config --global core.editor emacs
```
````

### 설정 확인

- git config —list 명령을 실행하면 설정한 모든 것을 보여주어 확인 가능

  ```
  git config --list
  user.name=John Doe
  user.email=johndoe@example.com
  color.status=auto
  color.branch=auto
  color.interactive=auto
  color.diff=auto
  ```

  - git config <key> 명령으로 Git이 특정 Key에 대해 어떤 값을 사용하는지 확인할 수 있다.

## Reference

[Git 시작하기 - 최초 설정](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95)
