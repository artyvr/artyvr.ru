---
title: Локальный прокси
description: Локальный прокси с vless
date: 2025-10-15T20:00:00+01:00
draft: false
tags: [proxy, squid, vless] 
toc: false
---

```bash
# Установка Xray
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ install

# Установка V2Ray
# Читаем https://v2raya.org/en/
bash -c "$(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)"

```

```bash
# Установка Squid
sudo apt update
sudo apt install squid -y
```

```bash
nano /etc/squid/squid.conf
```

```bash
# Базовые настройки
http_port 3128
visible_hostname lan-proxy

# ACL для локальной сети
acl local_net src 192.168.0.0/24
acl SSL_ports port 443
acl Safe_ports port 80
acl Safe_ports port 443
acl CONNECT method CONNECT

# Разрешения
http_access allow local_net
http_access deny all
# а можно просто http_access allow all

# Перенаправление трафика через Xray порт узнаем из конфига V2Ray /etc/v2raya/config.json 
# раздел inbounds, port:xxxxx
cache_peer 127.0.0.1 parent xxxxx 0 no-query default
never_direct allow all

# Логирование???
access_log /var/log/squid/access.log
```