path=$(cd `dirname $0`;pwd)
read -p "input mysql command:" command
read -p "set query alias:" query
#save mysql command
echo "$command" > .$query.sh
#query script
query_sh="val=\$(echo \"\$1\" | source $path/.$query.sh)\necho \"\$val\""
echo "$query_sh" > $query
chmod +x $query
