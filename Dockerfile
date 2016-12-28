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
# Dependecies
COPY package.json /usr/src/app/
#RUN bash -c 'time npm install --quiet --progress=false --no-optional'

# Sources & tests
COPY . /usr/src/app/
#RUN bash -c 'time npm run validate'
