---
title: SSH авторизация
description: Создание ssh ключей для удаленной авторизации
date: 2025-04-19T18:40:00+01:00
draft: false
tags: [bash, ssh, linux] 
toc: false
---


## SSH Certificate-Based Authentication

## Создание сертификатов

RSA 2048:

```bash
ssh-keygen -t rsa
```

RSA 4096:

```bash
ssh-keygen -t rsa -b 4096
```

ED25519:

```bash
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519
```

## Копирование на удаленной хост

```bash
ssh-copy-id username@remote_host
# или
ssh-copy-id -i user_key.pub username@remote_host

```

## Отключение авторизации по логину-паролю

```bash
/etc/ssh/sshd_config
```

>PasswordAuthentication no

## Перезагрузка ssh сервиса

```bash
sudo service ssh restart
```

или

```bash
sudo service sshd restart
```
