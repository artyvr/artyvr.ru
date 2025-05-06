---
title: Windows 10 QEMU
description: Запустить Windows 10 в QEMU
date: 2025-04-20T18:27:00+01:00
#tldr: false
draft: false
tags: [qemu] 
toc: false
---


### Устанавливаем QEMU

```bash
apt install 
или
pacman -S
или ...
```

### Создаем рабочую директорию

```bash
mkdir win10
```

### Создаем файл образа системы

```bash
qemu-img create -f qcow2 system.img 40G
```

### Качаем UEFI BIOS для QEMU

Ссылка на репозиторий [ovmf-blobs](https://github.com/BlankOn/ovmf-blobs)

### Качаем драйвера

Ссылка [virtio-win](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/)

Выбираем последнюю версию, файл с расширением .iso

### Качаем установочный образ windows 10

...

### Создаем файл запуска установки виртуальной машины

```bash
nano run_install.sh
```

```bash
#!/bin/sh

qemu-system-x86_64 \
-cpu host \
-enable-kvm \
-M q35 \
-smp 4 \
-m 6G \
-vga qxl \
-bios bios64.bin \
-device ramfb \
-device nec-usb-xhci \
-device usb-kbd \
-device usb-mouse \
-device usb-tablet \
-device virtio-blk,drive=system \
-drive if=none,id=system,format=qcow2,file=system.img \
-device usb-storage,drive=drivers \
-drive if=none,id=drivers,media=cdrom,file=virtio-win.iso \
-drive if=none,id=install,format=raw,media=cdrom,read-only=on,file=Win10_22H2_Russian_x64v1.iso \
-device usb-storage,drive=install \

```

### Создаем файл запуска виртуальной машины

```bash
nano run.sh
```

```bash
#!/bin/sh

qemu-system-x86_64 \
-cpu host \
-enable-kvm \
-M q35 \
-smp 4 \
-m 6G \
-vga qxl \
-bios bios64.bin \
-device ramfb \
-device nec-usb-xhci \
-device usb-kbd \
-device usb-mouse \
-device usb-tablet \
-device virtio-blk,drive=system \
-drive if=none,id=system,format=qcow2,file=system.img \

```

а ещё можно установить **virtio-win-guest-tools.exe** от туда же [virtio-win](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/)
