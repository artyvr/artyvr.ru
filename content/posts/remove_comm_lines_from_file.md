---
title: Удаление строк bash
description: Удаление закоментированных строк из файла
date: 2025-04-20T18:27:00+01:00
#tldr: false
draft: false
tags: [bash, linux] 
toc: false
---

```bash

cat /etc/apt/sources.list | grep "^[^#*/;]" > /etc/apt/sources.list.save

```

или

```bash

egrep -v '^#|^$' /etc/apt/sources.list > /etc/apt/sources.list.save

```
