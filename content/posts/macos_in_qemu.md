---
title: MacOS QEMU
description: Запуск MacOS в QEMU
date: 2025-05-01T18:01:00+01:00
draft: false
tags: [qemu, macos] 
toc: false
---

### MacOS QEMU

Клонируем репозиторий:
[OSX-KVM](https://github.com/kholia/OSX-KVM)

```bash
git clone https://github.com/kholia/OSX-KVM.git
```

Следуем инструкциям из репозитория.

Для проброса usb-устройств в файл **OpenCore-Boot.sh** добавляем строку:

> -device usb-host,bus=ehci.0,vendorid=0x05ac,productid=0x12ab,guest-reset=false,id=iphone

**vendorid** и **productid** узнаем из вывода команды **lsusb**

```bash

lsusb

Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 05ac:12ab Apple, Inc. iPad
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
...

```

в моем случае это ***05ac:12ab Apple, Inc. iPad***
