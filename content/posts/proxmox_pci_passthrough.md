---
title: Проброс видеокарты в Proxmox
description: Настройка проброса pci-устройств в Proxmox
date: 2025-08-12T18:15:00+01:00
#tldr: false
draft: false
tags: [bash, pve, proxmox, linux, pci, gpu] 
toc: false
---

## 

```bash
nano /etc/default/grub
```

### Для Intel
```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on pt=on"
```
### Для AMD
```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on pt=on"
```
### Обновить сонфигурацию GRUB
```bash
update-grub
```

## Добавить модули ядра
```bash
nano /etc/modules
```
### Вставляем
```bash
vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
```
### Обновить образ ядра
```bash
update-initramfs -u -k all
```

## Перезагружаемся!!!

## Отключаем использование видеокарты хостом

### Узнаем id устройства
```bash
lspci -nn | grep VGA
# Вывод команды
# 10:00.0 VGA compatible controller [0300]: NVIDIA Corporation NV44 [Quadro NVS 285] [10de:0165] (rev a1)
# копируем 10de:0165
```
### Далее
```bash
nano /etc/modprobe.d/vfio.conf
```
### Указываем скопированое ранее
```bash
options vfio-pci ids=10de:0165 disable_vga=1
```
### Вносим драйвера устройства в черный список
```bash
nano /etc/modprobe.d/blacklist.conf 
```
### Вставляем
```bash
blacklist radeon
blacklist nouveau
blacklist nvidia
blacklist nvidiafb
blacklist nvidia_drm
blacklist i915
```
## Перезагружаемся!!!

## Создаем виртуальную машину

При создании виртуальной машины важно во вкладке System:

![System](https://artyvr.ru/images/proxmox_pci_passthrough_img_1.png "Создание виртуальной машины")