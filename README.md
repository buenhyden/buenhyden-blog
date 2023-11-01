# Blog 제작

## Windows Chocolatey 설치

1. 관리자 모드로 PowerShell 실행
2. Get-ExecutionPolicy로 권한 확인

```bash
Get-ExecutionPolicy
```

3. Restricted라면 AllSigned나 Bypass로 설정

```bash
# ExcutionPolicy를 AllSigned로 설정
$ Set-ExecutionPolicy AllSigned

# ExcutionPolicy를 Bypass로 설정
$ Set-ExecutionPolicy Bypass -Scope Process
```

4. Chocolatey 공식 설치 스크립트 실행

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Go & Hugo 설치

* 위의 Chocolatey 설치가 되었다는 가정하

1. GoLang 설치

```bash
choco install golang
```

2. hugo 설치

```bash
choco install hugo
```

3. hugo-extended 설치

```bash
choco install hugo-extended
```

* submodules

```bash
git submodule update --init --remote --recursive
git submodule update --recursive

```

```bash
npx mrm lint-staged

```
