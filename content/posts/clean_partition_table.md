---
title: Удаление партиций linux
description: Полное удаление партиций диска в Linux
date: 2025-07-23T22:14:10+01:00
#tldr: false
draft: false
tags: [linux] 
toc: false
---


### Удаляем все записи о разделах и таблицу разделов на диске
```bash
sgdisk -Z /dev/sdXYZ
```

### Создаем разделы на диске
```bash
cfdisk /dev/sdXYZ
```

### Форматируем разделы
```bash
mkfs.ext4 /dev/sdXYZ
```