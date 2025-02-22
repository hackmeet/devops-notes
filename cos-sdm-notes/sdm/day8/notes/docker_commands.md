# docker

## image

- push an image to docker registry

```bash

# create a (free) account on hub.docker.com

# login with newly created account
> docker login
# enter user name and password

# tag an image (create a copy of existing image) to match with docker registry requirements
# image format: <user name>/<image name>
# e.g. pythoncpp/website
# > docker image tag <exist image name> <new image name>
> docker image tag website pythoncpp/website

# push the image to the registry
# > docker image push <user name>/<image name>
> docker image push pythoncpp/website

```

## update program version

```bash

# remove the running service
> docker service rm website

# remove the old image version
> docker image rm pythoncpp/website

# build new version
> docker image build -t pythoncpp/website .

# login to the docker account
> docker login

# push the new version
> docker image push pythoncpp/website

# start the service
> docker service create --name website --replicas 5 -p 9070:80 pythoncpp/website

```
