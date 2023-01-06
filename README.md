# mlq
docker-compose demo，nginx 反向代理 node 服务，实现滚动更新

启动命令
```
docker-compose up --scale node=3 -d
```

测试
```
curl http://localhost:80s/api
```

滚动更新还是需要 k8s 或者 docker swarm
