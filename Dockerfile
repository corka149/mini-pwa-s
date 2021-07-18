FROM nginx:1.21.1

LABEL maintainer="corka149 <corka149@mailbox.org>"

COPY . /usr/share/nginx/html

EXPOSE 80
