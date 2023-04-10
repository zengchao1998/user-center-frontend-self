# 前端
FROM nginx

WORKDIR /usr/share/nginx/html/
# 设置用户
USER root

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist .

EXPOSE 80

# 解决容器启动退出问题
CMD["nginx", "-g", "daemon off;"]
