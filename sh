netstat  -an | awk '/tcp/{print $6}' |sort | uniq -c # 查看tcp连接状态的数量
curl -w"@format" "github.com"  # 查看http请求响应时间, format 为文件，文件内容如下
#time_namelookup   :  %{time_namelookup}\n
#time_connect      :  %{time_connect}\n
#time_appconnect   :  %{time_appconnect}\n
#time_redirect     :  %{time_redirect}\n
#time_pretransfer  :  %{time_pretransfer}\n
#time_starttransfer:  %{time_starttransfer}\n
#time_total        :  %{time_total}\n
