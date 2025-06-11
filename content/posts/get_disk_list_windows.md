---
title: Список дисков Windows
description: Получить список логических дисков в Windows
date: 2025-06-10T22:02:00+01:00
draft: false
tags: [windows] 
toc: false
---

## Получить список логических дисков в Windows из командной строки


```pwsh
wmic logicaldisk get description,name

или

fsutil fsinfo drives
```
