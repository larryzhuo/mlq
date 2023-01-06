# mlq
docker-compose demo，nginx 反向代理 node 服务

node 服务打包命令
```
docker build -t node-server:1.0 .
```


启动服务
```
docker-compose up --scale node=3 -d
```

摘除服务
```
docker-compose down
```

测试
```
curl http://localhost:80s/api
```

1. 滚动更新还是需要 k8s 或者 docker swarm。 docker-compose 启动还是所有进程批量 recreate
2. docker-compose.yml 中直接修改 node-server 版本，通过 docker-compose up -d 启动服务，回自动切换到新版本，将旧版本删掉
