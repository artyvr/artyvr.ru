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

Для проброса usb-устройств в файл **OpenCore-Boot.sh** добовляем строку:

> -device usb-host,bus=ehci.0,vendorid=0x05ac,productid=0x12ab,guest-reset=false,id=iphone

в моем случае это iphone/ipad
