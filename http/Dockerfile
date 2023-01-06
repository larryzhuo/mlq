FROM registry.cn-hangzhou.aliyuncs.com/duoguan_k8s/node-16-alpine:16 as build

WORKDIR /home

COPY . .

EXPOSE 7006

ENTRYPOINT ["node", "index.js"]
