## Run install.sh:
```sh
sh install.sh
```
1. Type down your mysql connect command. __e.x. :__ `mysql -uroot -l8.8.8.8 -P3306 -pPassword`
2. Type query alias. if your wanna running query like `query "select * from a;"` Then type `query`

## Start Query:
1. Run command like this:
```sh
~$ ./query "select * from sakila.actor where actor_id in (1,2,3,4)\G;"
*************************** 1. row ***************************
   actor_id: 1
 first_name: PENELOPE
  last_name: GUINESS
last_update: 2006-02-15 04:34:33
*************************** 2. row ***************************
   actor_id: 2
 first_name: NICK
  last_name: WAHLBERG
last_update: 2006-02-15 04:34:33
*************************** 3. row ***************************
   actor_id: 3
 first_name: ED
  last_name: CHASE
last_update: 2006-02-15 04:34:33
*************************** 4. row ***************************
   actor_id: 4
 first_name: JENNIFER
  last_name: DAVIS
last_update: 2006-02-15 04:34:33
```
