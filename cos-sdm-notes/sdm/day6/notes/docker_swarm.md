# docker swarm

## swarm

```bash

# check if swarm is active
> docker info | grep Swarm

# initialize swarm (cluster)
> docker swarm init

# to add another machine as a node in the swarm
> docker swarm join --token <token>

# to generate token for manager node
> docker swarm join-token manager

# to generate token for worker node
> docker swarm join-token worker

# to leave from cluster (for worker)
> docker swarm leave

# to leave from cluster (for manager)
> docker swarm leave --force


```

## node

- machine or host
- contains OS and docker

```bash

# get the list of nodes
> docker node ls

# get details of selected node
> docker node inspect <node id>

# to remove a node forcefully from the swarm
> docker node rm <node id>

```

## service

- manage the containers
- load balancer

```bash

# get the list of services
> docker service ls

# create a service
# > docker service create --name <service name> <image>
> docker service create --name myservice httpd

# create a service with port forwarding enabled
> docker service create --name myservice -p 9090:80 httpd

# get details of a selected service
# > docker service inspect <service name>
> docker service inspect myservice

# get the list of containers created by a service
# > docker service ps <service name>
> docker service ps myservice

# remove selected service
# > docker service rm <service name>
> docker service rm myservice

# scale the service
# > docker service scale <service name>=<desired count>
> docker service scale myservice=5

```
