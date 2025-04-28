---
title: Внешняя директория в VM Proxmox
description: Монтирование внешней директории к VM или LXC Proxmox
date: 2025-04-21T18:15:00+01:00
#tldr: false
draft: false
tags: [bash] 
toc: false
---

```bash
pct set 102 -mp1 /mnt/pve/moydisk/films,mp=/mnt/hdd2
```

Где "102" это номер виртуальной машины или контейнера