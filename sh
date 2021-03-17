netstat  -an | awk '/tcp/{print $6}' |sort | uniq -c # 查看tcp连接状态的数量
