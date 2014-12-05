Bitonic Team - La Nuit de l'info 2014 :D
===================

[<img src="http://i.imgur.com/7CET5LB.png" />](http://i.imgur.com/7CET5LB.png)
[<img src="http://i.imgur.com/QwLcsiD.png" />](http://i.imgur.com/QwLcsiD.png)

Installation with docker
-------------
**Requirements:**

Install FIG at fig.sh

install docker

install docker-enter

----------------------------

`$ git clone https://github.com/lighta971/bitonic && cd bitonic`

`$ mkdir -p tmp/mongo && fig up`

Sorrry, but you will need to enter in node container to install `gulp` and execute build process:
Sorrry, but you will need to enter in node container to install `gulp` and execute build process:

`$ docker-enter bitonic_node_1`

`$ npm install -g gulp && gulp`

Installation without docker
-------------

**Requirements:**
Node, npm

`$ git clone https://github.com/lighta971/bitonic && cd bitonic`

`$ sudo npm install -g gulp bower`

`$ npm install && bower install`

`$ node server.js`

Usages
-------------------------

Node

http://localhost

terminal: `$ docker-enter docker_node_1`

Mongo

terminal: `$ docker-enter www_mongo_1`


