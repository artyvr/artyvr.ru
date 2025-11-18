---
title: Virtiofs Proxmox
description: Проброс virtiofs папок в VM Proxmox
date: 2025-11-15T20:16:01+01:00
draft: false
tags: [pve, proxmox, virtiofs] 
toc: false
---

## Создание virtiofs директорий на хосте
Datacenter -> Directory Mappings добавляем директории, указываем ID и путь до директорий на хосте

## Монтируем virtiofs в виртуальной машине
``` bash
nano /etc/fstab
```
Указываем точки монтирования
``` bash
ID-1 /media/1 virtiofs rw,relatime 0 0
ID-2 /media/2 virtiofs rw,relatime 0 0
```
Проверяем
```bash
mount -a
```
