FROM mysql:5.7

ENV MYSQL_DATABASE=nodedb \
    MYSQL_ROOT_PASSWORD=docker

ADD script.sql /docker-entrypoint-initdb.d

EXPOSE 3306