import urllib.request
import json
import re

urls = [
    "https://raw.githubusercontent.com/teropa/inc/master/src/patterns.js",
    "https://raw.githubusercontent.com/joeSeggiola/arduino-eurorack-projects/master/in_cv/patterns.h",
    "https://raw.githubusercontent.com/lmccart/in-c/master/public/patterns.json"
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            content = response.read().decode('utf-8')
            print(f"--- SUCCESS {url} ---")
            print(content[:500])
            break
    except Exception as e:
        print(f"Failed {url}: {e}")
