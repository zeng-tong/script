##Run install.sh:
```sh
sh install.sh
```
1. Type down your mysql connect command. e.x. : mysql -uroot -l8.8.8.8 -P3306 -pPassword
2. Type query alias. if your wanna run query like `query "select * from a;"` then type `query`

##Start Query:
run command like this:
```sh
./query "select * from sakila.actor where actor_id in (1,2,3,4)\G;"
```

