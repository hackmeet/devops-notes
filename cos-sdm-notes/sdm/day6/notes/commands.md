# docker

## image

```bash

# get the list of images
> docker image ls

# get details of selected image
> docker image inspect <image name>

# remove an image
> docker image rm <image name>

# pull an image from a docker registry
> docker image pull <image name>

# build an image
# > docker image build -t <image tag> <image context>
> docker image build -t myimage:latest .
> docker image build -t myimage .

```

### building a docker image (containerizing an application)

```bash

# create a file named Dockerfile
# install following VS code extension
# https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker
# add instructions to create a container
# build the image
# create a container with newly built image

```

## container

```bash

# get the list of running containers
> docker container ls

# get the list of all container (Up + Exited + Created)
> docker container ls -a

# create a new container
# > docker container create --name <container name> <image name>
> docker container create --name mycontainer httpd

# start a created or stopped container
> docker container start <container name or id>

# stop a running container
> docker container stop <container name or id>

# get details of selected container
> docker container inspect <container name or ide>

# execute a command inside a container
# > docker container exec <container name or id> <command>

# run date command inside the container named mycontainer
> docker container exec mycontainer date

# remove a non-running docker container
> docker container rm <container name or id>

# remove a running docker container
> docker container rm --force <container name or id>

# run a docker container
# -i: interactive (you can interact with container)
# -t: teletype terminal (you can now get the terminal of a running container)
# -d: run the container in detached mode (background)
# > docker container run -itd --name <container name> <image name>
> docker container run -itd --name mycontainer httpd

# get the terminal of running container
# > docker container exec -it <container name or id> <bash or sh>
> docker container exec -it mycontainer bash

# run a container with port forwarding
# > docker container run -itd --name <container name> -p <source or local port>:<destination or container port> <image name>
> docker container run -itd --name mycontainer -p 9090:80 httpd

# run a container with environment variable
# > docker container run -itd --name <container name> -p <local port>:<container port> -e <variable name>=<variable value> <image name>
> docker container run -itd --name mydb -e MYSQL_ROOT_PASSWORD=root mysql

# get the logs from selected container
> docker container logs <container name or id>

```

## volume

```bash

# get list of volumes
> docker volume ls

# create a volume
# > docker volume create <volume name>
> docker volume create myvolume

# get details of the volume
> docker volume inspect <volume name>

# remove a volume
> docker volume rm <volume name>

# remove unused volumes
> docker volume prune

```
