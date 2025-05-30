---
title: Docker container service
description: Systemd сервис для запуска docker контейнера
date: 2025-05-29T22:41:00+01:00
draft: false
tags: [docker, linux, systemd] 
toc: false
---

```bash
[Unit]
Description=X docker compose service
After=docker.service
Requires=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
ExecStart=/bin/bash -c "docker compose -f /path/to/docker-compose-x.yml up --detach"
ExecStop=/bin/bash -c "docker compose -f /path/to/docker-compose-x.yml stop"

[Install]
WantedBy=multi-user.target
Alias=x.service
```
