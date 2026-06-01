import urllib.request
import json
import base64

url = "https://api.github.com/search/code?q=terry+riley+in+c+extension:json"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        if 'items' in data and len(data['items']) > 0:
            item = data['items'][0]
            raw_url = item['html_url'].replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/')
            print(f"Found: {raw_url}")
            
            # download it
            req2 = urllib.request.Request(raw_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2) as res2:
                content = res2.read().decode()
                print("--- CONTENT ---")
                print(content[:1000])
        else:
            print("Not found.")
except Exception as e:
    print(f"Error: {e}")
