import re

def translate_path(path_str, dx, dy):
    parts = re.split(r'([MLQZ])', path_str)
    new_parts = []
    
    i = 0
    while i < len(parts):
        token = parts[i].strip()
        if not token:
            i += 1
            continue
        if token in ('M', 'L', 'Q', 'Z'):
            cmd = token
            new_parts.append(cmd)
            i += 1
            if cmd == 'Z':
                continue
            if i < len(parts):
                coords_str = parts[i].strip()
                coords = [float(x) for x in re.findall(r'[-+]?\d*\.\d+|\d+', coords_str)]
                new_coords = []
                for idx, val in enumerate(coords):
                    if idx % 2 == 0:
                        new_coords.append(val + dx)
                    else:
                        new_coords.append(val + dy)
                
                formatted_coords = []
                for val in new_coords:
                    if val.is_integer():
                        formatted_coords.append(str(int(val)))
                    else:
                        formatted_coords.append(f"{val:.1f}")
                
                new_parts.append(" ".join(formatted_coords))
                i += 1
        else:
            new_parts.append(token)
            i += 1
            
    return " ".join(new_parts)

# We will read public/logo_manual.svg, which has the original paths
with open('public/logo_manual.svg', 'r', encoding='utf-8') as f:
    svg_content = f.read()

# Let's find the R path in GRIHA (which has color #3D2010 and starts with M 549.5 413 or similar)
# Let's look for: d="M 549.5 413 ...
griha_r_match = re.search(r'<path[^>]*fill="#3D2010"[^>]*d="([^"]*M 549\.5 413[^"]*)"', svg_content)
if not griha_r_match:
    # Try a more general search for the second brown path
    brown_paths = re.findall(r'<path[^>]*fill="#3D2010"[^>]*d="([^"]*)"', svg_content)
    if len(brown_paths) >= 2:
        griha_r_path = brown_paths[1]
    else:
        print("Error: Could not find R path in GRIHA")
        exit(1)
else:
    griha_r_path = griha_r_match.group(1)

print("Found GRIHA R path:", griha_r_path[:100] + "...")

# Translate the R path by dx = 346, dy = 158
translated_r_path = translate_path(griha_r_path, 346, 158)
print("Translated R path:", translated_r_path[:100] + "...")

# Now replace the cut-off R path in the SVG content
# The cut-off R path has color #1A6B7A and starts with M 892.5 572
# We will construct the new path element
new_r_element = f'<path fill="#1A6B7A" stroke="#1A6B7A" stroke-width="1" opacity="1" d="{translated_r_path}" />'

# Let's replace the cut-off R path in the SVG content
# Let's search for the path that starts with M 892.5 572
pattern = r'<path[^>]*fill="#1A6B7A"[^>]*d="[^"]*M 892\.5 572[^"]*"[^>]*/>'
if re.search(pattern, svg_content):
    updated_svg = re.sub(pattern, new_r_element, svg_content)
else:
    # Try a more general search for the last teal path
    teal_paths = re.findall(r'(<path[^>]*fill="#1A6B7A"[^>]*d="([^"]*)"[^>]*/>)', svg_content)
    if teal_paths:
        last_teal_element = teal_paths[-1][0]
        updated_svg = svg_content.replace(last_teal_element, new_r_element)
    else:
        print("Error: Could not find cut-off R path in SANSAR")
        exit(1)

# Write to both public/logo.svg and public/logo_manual.svg
with open('public/logo.svg', 'w', encoding='utf-8') as f:
    f.write(updated_svg)

with open('public/logo_manual.svg', 'w', encoding='utf-8') as f:
    f.write(updated_svg)

print("Successfully updated logo.svg and logo_manual.svg with the completed R!")
