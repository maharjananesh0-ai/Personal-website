import re

with open('public/logo_previous.svg', 'r') as f:
    content = f.read()

path1_match = re.search(r'<path[^>]*d="(.*?)"', content)
if not path1_match:
    print("No path found")
    exit()

path1 = path1_match.group(1)
subpaths = [s.strip() for s in path1.replace('Z M', 'Z|M').split('|')]

print(f'Total subpaths in path 1: {len(subpaths)}')

out_html = "<html><body><svg viewBox='70 180 900 620' style='width:900px; height:620px; border:1px solid black;'>\n"
out_html += f"  <path fill='#3D3D3D' d='{subpaths[0]}' />\n"

import random

for i, sp in enumerate(subpaths[1:]):
    color = f"#{random.randint(0, 0xFFFFFF):06x}"
    out_html += f"  <path id='hole_{i+1}' fill='{color}' d='{sp}' onclick='alert(this.id)' />\n"

out_html += "</svg></body></html>"

with open('public/holes_viewer.html', 'w') as f:
    f.write(out_html)

print("Created public/holes_viewer.html")
