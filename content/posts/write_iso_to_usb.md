---
title: Запись iso linux
description: Записать iso-файл в Linux
date: 2025-07-21T21:33:10+01:00
#tldr: false
draft: false
tags: [iso, linux] 
toc: false
---

### Записать iso на usb в Linux

``` bash
sudo dd bs=4M if=path/to/file.iso of=/dev/disk/by-id/usb-flash_drive conv=fsync oflag=direct status=progress
```

### Путь до usb устройства получаем из

``` bash
sudo fdisk -l
```