---
title: Простоя конфигурация Cisco
description: Основная конфигурация маршрутизатора Cisco 800
date: 2025-04-26T18:00:00+01:00
draft: false
tags: [cisco, router] 
toc: false
---


``` bash

enable
write erase
reload

enable
conf t
service password-encryption
aaa new-model
aaa authentication login default local
username USER privilege 15 secret PWD

conf t
hostname R1

conf t
interface Fa 4
ip address xxx.xxx.xxx.xx2 255.xxx.xxx.xxx
 либо ip address dhcp
no shutdown

conf t
interface Vlan 1
Ip address 192.168.0.1 255.255.255.0
no shutdown

ip route 0.0.0.0 0.0.0.0 xxx.xxx.xxx.xx1

ip dhcp pool LAN
network 192.168.0.0 255.255.255.0
dns-server 192.168.0.1 8.8.8.8
default-router 192.168.0.1
exit
ip dhcp excluded-address 192.168.0.1 192.168.0.100

ip domain-lookup
ip dns server
ip name-server 192.168.2.1
ip name-server 8.8.8.8

ip access-list standard ACL_NAT
permit 192.168.0.0 0.0.0.255
Interface Vlan 1
ip nat inside
Interface Fa 4
ip nat outside
ip nat inside source list ACL_NAT interface fa4

write

```