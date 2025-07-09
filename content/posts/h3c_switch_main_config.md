---
title: Конфигурация H3C
description: Минимальная конфигурация коммутатора H3C
date: 2025-04-22T18:10:00+01:00
#tldr: false
draft: false
tags: [net, h3c] 
toc: false
---


### Первоночальная конфигурация
``` bash

system-view
sysname s1
super password level 3 cipher PWD

local-user USER
password cipher PWD
level 3
service-type terminal telnet level 3

user-interface aux 0
authentication-mode scheme 

interface Vlan-interface 1
ip address 192.168.0.2 24

user-interface vty 0 4
authentication-mode scheme
protocol inbound all

ntp-service unicast-server 217.71.128.77
clock timezone MSK add 03:00:00
clock datetime 16:50:00 10/21/2024

header login !

save

```

### Конфигурация VLAN`s
``` bash
system-view
vlan 101
description DMZ
port Ethernet 1/0/11
quit

interface Ethernet 1/0/11
port link-type trunk # Для теггированого порта
port trunk permit vlan 101
quit
save

```