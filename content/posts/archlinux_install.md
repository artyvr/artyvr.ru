---
title: Установка archlinux
description: Установка Archlinux
date: 2025-06-29T18:00:00+01:00
draft: false
tags: [linux, archlinux] 
toc: false
---


### При ошибке синхранизации времени (time synchronization not completing while you wait check the docs for workarounds)
Проблема актуальна на 30 июня 2026 г.

```bash
nano /etc/systemd/timesyncd.conf
```
Дописываем

```bash
NTP=time.google.com
```
Раскомментируем **Fallback_NTP**
Сохраняем файл

```bash
systemctl restart systemd-timesyncd
```
