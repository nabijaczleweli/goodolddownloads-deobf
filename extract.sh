# [01:23] 💖 kaylee 💖: ok so
# [01:23] 💖 kaylee 💖: replace path/to/deobf.js with wherever you downloaded nab's deobf.js to
# [01:23] 💖 kaylee 💖: run this in the directory of all the pages

for file in *; do dank=$(cat $file | grep dank | sed -n -e 's/^.*">//p' | sed 's/dank = \"//' | sed -e 's/\".*//');memes=$(cat $file | grep dank | sed -n -e 's/^.*">//p' | sed 's/.*memes = //' | sed 's/;.*//');for link in $(cat $file | grep "<a class=\"item" | sed 's/.*title=\"//' | sed -s 's/\".*//'); do node path/to/deobf.js $link $dank $memes; done; done
