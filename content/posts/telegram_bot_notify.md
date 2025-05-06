---
title: уведомления в Telegramm
description: Посылаем уведемления в telegramm bot через bash
date: 2025-01-27T19:22:00+01:00
#tldr: false
draft: false
tags: [bash, telegramm] 
toc: false
---


```bash
#!/bin/bash

TELEGRAM_BOT_TOKEN="0123456789:qwertyuiopasdfghjklzxcvbnm"
TELEGRAM_BOT_CHAT_ID="0123456789"

MESSAGE_TEXT="$1"

escape() {
    echo "$1" | sed 's/&/%26/g; s/ /%20/g; s/\n/%0A/g'
}

ESCAPED_MESSAGE_TEXT=$(escape "$MESSAGE_TEXT")
MESSAGE="$ESCAPED_MESSAGE_TEXT"

curl -S -X POST -d chat_id="$TELEGRAM_BOT_CHAT_ID" -d text="$MESSAGE" -d parse_mode="HTML" "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage"

```
