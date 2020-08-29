#!/bin/bash

rm ../build/*.html

cat index.md > index_tmp.md

files=`ls -v *.md`

for md_file in $files
do
    if [[ $md_file != "index.md" && $md_file != "index_tmp.md" && $md_file != "404.md" ]]
    then
        file_base=`basename $md_file .md`
        doc_title=`grep -m 1 "^# .*" $md_file | sed s/"# "//g`
        if [[ -n "$doc_title" ]]
        then
            echo " ｜ [$doc_title]($file_base.html)" >> index_tmp.md
        fi
    fi
done
echo " ｜ " >> index_tmp.md

for md_file in $files
do
    file_base=`basename $md_file .md`
    doc_title=`grep -m 1 "^# .*" $md_file | sed s/"# "//g`

    if [[ -z "$doc_title" ]]
    then
        doc_title="Some website"
    fi

    pandoc $md_file > tmp.html

    cat head.html tmp.html foot.html | \
    sed "s/{{FILE}}/$file_base/g" |    \
    sed "s/{{TITLE}}/$doc_title/g"     \
        > ../build/$file_base.html

    rm tmp.html
done

rm index_tmp.md
mv ../build/index_tmp.html ../build/index.html
