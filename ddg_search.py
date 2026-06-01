import urllib.request
import urllib.parse
import json
import re

query = urllib.parse.quote('site:raw.githubusercontent.com "terry riley" "in c" json')
url = f"https://html.duckduckgo.com/html/?q={query}"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode()
        links = re.findall(r'href="(//duckduckgo.com/l/\?uddg=[^"]+)"', html)
        for link in links:
            actual_url = urllib.parse.unquote(link.split('uddg=')[1].split('&')[0])
            if 'raw.githubusercontent.com' in actual_url:
                print(f"Found URL: {actual_url}")
                # fetch it
                req2 = urllib.request.Request(actual_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req2) as res2:
                    print(res2.read().decode()[:500])
                    break
except Exception as e:
    print(f"Error: {e}")
