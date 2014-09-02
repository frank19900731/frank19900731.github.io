workDir="/Users/frank/git/octopress/"
jsonFiles="_deploy/search.json;public/search.json"
dictPath="./parse-lib/dict.txt"
java -classpath "parse-lib/je-analysis-1.5.1.jar:parse-lib/octopress-parsejson-0.0.1-SNAPSHOT-jar-with-dependencies.jar" com.tsinghua.taijiru.octopress.index.OctopressIndexBuilder $workDir $jsonFiles $dictPath