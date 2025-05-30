---
title: Media convert scripts
description: Конвертация медиа-файлов
date: 2025-05-03T20:01:00+01:00
draft: false
tags: [bash, convert, linux] 
toc: false
---

## Конвертиция MOV в avi один проход

```bash
#!/usr/bin/env bash
for i in *.MOV; do
    mencoder "${i}" -ovc x264 -x264encopts crf=22:subq=7:8x8dct:trellis=2:threads=0:frameref=3:bframes=3:weightb -oac mp3lame -lameopts cbr:br=256 -o "${i}.avi";
done
```

## Конвертиция MOV в avi два прохода

```bash
#!/usr/bin/env bash
for i in *.MOV; do
    mencoder "${i}" -nosound -ovc x264 -x264encopts turbo=1:subq=6:trellis=2:partitions=all:8x8dct:me=umh:frameref=5:bframes=5:threads=2:bitrate=5000:pass=1 -noskip -mc 0 -o /dev/null;
    mencoder "${i}" -ovc x264 -x264encopts subq=6:trellis=2:partitions=all:8x8dct:me=umh:frameref=5:bframes=5:threads=2:bitrate=5000:pass=2 -oac mp3lame -lameopts cbr:br=256 -noskip -mc 0 -o "${i}-2p.avi"
done
```

## Конвертиция mp4 в mp3

````bash
#!/usr/bin/env bash
for i in *.mp4; do
    name=`echo ${i%.*}`
    ffmpeg -i "${i}" -vn -ar 44100 -ac 2 -ab 126k -f mp3 "${name%}.mp3";
done
````

## Конвертиция tiff в jpg

```bash
#!/usr/bin/env bash

q=100 # quality

mkdir PHOTO_jpeg;
for i in *.tiff ; do
    convert -quality ${q} "$i" "PHOTO_jpeg/${i%}.JPG" ;
done
echo "... Done!"
exit 0 

```

## Конвертиция raw в jpg

```bash
#!/usr/bin/env bash
echo "Шаг 1"
for i in *.RW2 ; do
    dcraw -T $i ;
    echo "в процессе ..."
done
clear
sleep 3
echo "Шаг 2"
mkdir PHOTO_jpeg;
for i in *.tiff ; do
    name=`echo ${i%.*}`
    convert -quality 100 "$i" "PHOTO_jpeg/${name%}.JPG" ;
    echo "в процессе..."
clear
done
echo "... Всё!"
exit 0 
```
