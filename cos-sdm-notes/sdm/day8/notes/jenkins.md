# Jenkins

## physical installation

```bash

# download the key used to get the jenkin's apt repository
> sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
    https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

# add the jenkins apt repo
> echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null

# update apt sources
> sudo apt-get update

# install openjdk (if already installed, you may skip this)
> sudo apt-get install fontconfig openjdk-17-jre

# install jenkins
> sudo apt-get install jenkins

# check the status of jenkins service
> sudo systemctl status jenkins

# start the jenkins service
> sudo systemctl start jenkins

# restart the jenkins service
> sudo systemctl restart jenkins

```

## install jenkins using docker

```bash

# pull the image
> docker pull jenkins/jenkins:lts-jdk17

# start the jenkins container
> docker container run -itd --name jenkins -p 8080:8080 jenkins/jenkins:lts-jdk17

# hit the jenkins url on the browser
> http://localhost:8080


```

## jenkins project (job)

```bash

# create a freestyle project


# docker access token
# dckr_pat_XCnX68YJz6xfoxsdiRufdfJ3mgc

> echo dckr_pat_XCnX68YJz6xfoxsdiRufdfJ3mgc | docker login -u pythoncpp --password-stdin

```
