# docker

## basic information

```bash

# get the basic information of docker installation
> docker info

```

## image

```bash

# get the list of docker images
> docker image ls

# pull an image from docker image registry
# image registry:
# - collection of docker images
# - types
#   - private: hosted by private company
#   - public: hosted by docker at hub.docker.com
# > docker image pull <image name>

# pull the httpd (apache) image from hub.docker.com
> docker image pull httpd

# pull the nginx image from hub.docker.com
> docker image pull nginx

# remove an image
# > docker image rm <image name>
> docker image rm httpd

# get details of a selected image
# > docker image inspect <image name>
> docker image inspect httpd

```

## container

```bash

# get the list of running containers
> docker container ls

# get the list of all containers
> docker container ls -a

# create a container of httpd image
> docker container create httpd

# create a container of nginx image with name as mynginx
> docker container create --name mynginx httpd

# start the container
> docker container start <container id> or <container name>

# stop the container
> docker container stop <container name or id>

# remove a container
> docker container rm <container name of id>

```
