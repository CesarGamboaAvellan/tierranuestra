FROM nginx:stable-alpine

COPY nginxConfig/nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/www/status-one

COPY dist/ .

EXPOSE 80
