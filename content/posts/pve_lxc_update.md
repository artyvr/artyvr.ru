---
title: Обновление LXC PVE
description: Обновление Debian LXC в Proxmox
date: 2025-04-17T18:22:00+01:00
#tldr: false
draft: false
tags: [bash, pve, proxmox, debian] 
toc: false
---

```bash

clear
echo "Update all Debian LXC"

for i in $(cat /etc/pve/.vmlist | grep node | cut -d '"' -f2 | sort -n)
do
        echo -e "\n Update lxc $i \n"
        pct exec $i -- bash -c "apt-get update && apt-get dist-upgrade -y && apt-get autoremove && apt-get autoclean && apt-get install -f"
        echo -e "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
done

```
