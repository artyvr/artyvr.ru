---
title: Delete old files
description: Удаление старых файлов, например логов
date: 2025-05-02T21:01:00+01:00
draft: false
tags: [bash, linux] 
toc: false
---

## Удаление старых логов

```bash
#!/usr/bin/env bash

logs_dir="/var/log"
ch_day=7
find ${logs_dir} -type f -mtime +${ch_day} -delete
exit 0
```
