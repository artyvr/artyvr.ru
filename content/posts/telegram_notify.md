---
title: Telegramm Bot notify
description: Уведомления в телеграмм бот
date: 2025-12-06T19:40:00+01:00
draft: false
tags: [telegram, bot] 
toc: false
---


### Создаем бота в телеграм через Botfather, запоминаем TOKEN бота

### Узнаем чат ID

+ заходим на [https://api.telegram.org/bot<Токен вашего бота>/getUpdates](https://api.telegram.org/bot<Токен вашего бота>/getUpdates)
+ в чат боте пишем любое сообщение
+ обновляем страницу [https://api.telegram.org/bot<Токен вашего бота>/getUpdates](https://api.telegram.org/bot<Токен вашего бота>/getUpdates)
+ Находим: 
    > ... "from":{"id": 1111111111 ...}...