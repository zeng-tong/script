#path=$(cd `dirname $0`;pwd)
read -p "input mysql command:" command
read -p "set query alias:" query
#save mysql command
echo "echo \"\$1\" | $command" > $query
chmod +x $query
