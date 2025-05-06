---
title: GITHUB Actions
description: Deploy hugo site to github pages
date: 2025-05-01T18:55:00+01:00
draft: false
tags: [github, cicd, hugo] 
toc: false
---

### Github actions hugo site

.github/workflows/deploy.yml

```yml

name: Deploy site
on: push

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      
      - name: Git checkout
        uses: actions/checkout@v4

      - name: Setup hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: "0.147.0"

      - name: Build site
        run: hugo --minify

      - name: Deploy site
        uses: peaceiris/actions-gh-pages@v4
        with:
           deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
           external_repository: name/repo
           publish_dir: ./public
           cname: example.com
          
```

В данном случае, собранный сайт загружается в другой репозиторий, для этого в репозитории с исходниками, в разделе **Actions secrets and variables**
создаем **Actions Key**, а в целевом репозитории создаем **Deploy keys** с соответствующим именем.

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f github-actions-deploy -N ""
```
