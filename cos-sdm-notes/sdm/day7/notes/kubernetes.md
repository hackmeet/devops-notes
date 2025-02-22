# Kubernetes

## vs code plugins

```bash

# YAML
> https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml

# Kubernetes
> https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools

```

## video links

- DevOps
  - https://www.youtube.com/playlist?list=PLnDkZeFQjSCN1X1Rw5aEBXDNWpytFKHSQ
- Linux
  - https://www.youtube.com/playlist?list=PLnDkZeFQjSCN_39myWPA7zciBTtbL0EIG

## minikube

```bash

# download the minikube executable
> curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

# install the minikube
> sudo install minikube-linux-amd64 /usr/local/bin/minikube

# create (start) the cluster
> minikube start

# stop the cluster
> minikube stop

# get the cluster status
> minikube status

# get the kubernetes dashboard
> minikube dashboard

# get ssh access of cluster
> minikube ssh

# destroy the cluster
> minikube destroy

# to make the service available outside the cluster
> minikube service <service name>

```

## node

```bash

# get the list of nodes
> kubectl get nodes
> kubectl get node

# get details of selected node
> kubectl describe node <node name>

```

## pod

```bash

# get the list of pods
> kubectl get pods
> kubectl get pod
> kubectl get po

# create a pod
# > kubectl create -f <yaml file path>

# get the details of selected pod
> kubectl describe pod <pod name>

# delete a selected pod
# > kubectl delete pod <pod name>
> kubectl delete pod myapp

```

## service

```bash

# get the list of services
> kubectl get services
> kubectl get svc

# create a service
# > kubectl create -f <yaml file name>

# get details of selected service
> kubectl describe service myservice

```
