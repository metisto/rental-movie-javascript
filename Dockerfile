FROM node:6.9.1

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update \
 && apt-get install -y \
      build-essential \
      inotify-tools \
      vim \
 && apt-get clean \
 && mkdir /var/run/sshd

WORKDIR /usr/src/app

COPY . /usr/src/app/
