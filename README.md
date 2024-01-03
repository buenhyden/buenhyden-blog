---
date: 2023-12-24T22:52:03
lastmod: 2024-01-03T23:41:12
---
# Blog 제작

## Script

- dev

```bash
hugo server --gc --disableFastRender --enableGitInfo -D
hugo server --gc --disableFastRender  -D
```

- prod

```bash
hugo server --gc --disableFastRender --enableGitInfo -D --renderToDisk --minify -e production
hugo server --gc --disableFastRender -D --renderToDisk --minify -e production
```

- build

```bash
hugo --gc -D --minify --enableGitInfo
hugo --gc -D --minify
```
