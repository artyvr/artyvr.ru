---
title: Выпуск сертификата letsencrypt
description: Выпуск и автопродление сертификата letsencrypt
date: 2025-04-27T19:00:00+01:00
draft: false
tags: [letsencrypt, certbot, https] 
toc: false
---



### Устанавливаем certbot
```bash

sudo apt update
sudo apt install certbot

```

### Выпускаем сертификат
```bash

sudo certbot certonly --standalone

```

### Проверяем состояние службы certbot
```bash

systemctl status certbot

```

Для всех манипуляции нужен реальный домен...