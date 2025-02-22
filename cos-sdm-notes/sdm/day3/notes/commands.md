# Git

## install git

```bash

# debian based linux (ubuntu)
> sudo apt-get install git

# red hat based linux (fedora)
> sudo yum install git
> sudo dnf install git

# mac
> brew install git
> brew update git

# make sure git version is above 2.30.x
> git --version

```

## one time configuration

- the user name and email configured below are used while recording the version

```bash

# get the global configuration parameters
> git config --global --list

# configure your user name
> git config --global --user.name "user name"

# configure your email
# note: this email need not to be a real git hub or git lab email
> git config --global --user.email "user email"

```

## basic workflow

```bash

# repository
# - directory which contains .git directory
# - .git contains metadata (versions or history)

# initialize a new git repository
> git init

# get the current status of all files and directories
> git status

# get the current status in one line
> git status -s

# statuses
# - status has two characters
#   - right character: shows the status of the file against working directory
#   - left character: shows the status of the file against staging area
# - ??: untracked file (git does not have any version of this file)
# - A : the file is added to the staging area (and later the file will get added to the repository)
# -  M: the file is modified from last recorded version in working directory but not yet added to staging area
# - M : the file is modified and added to the staging area
# -  D: the file is deleted from working directory but the change is not yet added to the staging area
# - D : the file is deleted from working directory and the change is added to the staging area


# add a file or directory in staging area
# > git add <file name>
> git add Person.java

# add everything in the current directory
# add all the changes seen in the current directory
# changes
# - file added (??)
# - file modified ( M)
# - file deleted ( D)
> git add .

# create a new version (in repository) of file(s) present in staging area
# > git commit -m <commit message>
> git commit -m "first commit"

# get the list of commits in the current repository
> git log

# get the list of commits with
# - color: use colors while showing the logs
# - oneline: do not show all information about every commit
# - graph: show the commit graph
> git lot --oneline --color --graph

# get the difference between current and previous version
> git diff

# get the last version from the repository
# loose all the changes made after the last commit (version)
# > git checkout <file name>
> git checkout Computer.java

# soft reset
# move the changes from staging area to working directory
# note:
# - after this command, developer has two choices
#   - if changes are not required, use checkout command to loose them
#   - if changes are required or more changes are added, use add command to move them back to the staging area
> git reset

# hard reset
# remove all the changes from working directory as well as the staging area
# note: execute this command on your own risk
> git reset --hard

```
