# git

## internals

### commands

- plumbing commands
  - used by users
  - e.g. add, commit, log etc.
- internal commands
  - e.g. cat-file

```bash

# initialize a git repo
> git init

# it creates a new directory named .git to store all the versions (metadata or objects)
# - objects: stores all the objects
# - hooks: stores all the hooks (callback methods used to handle different git events like push, update etc.)
# - info: stores information about the files or directories to be excluded while committing the changes  (exclude)
# - refs: stores the branches information
# - HEAD: stores the current branch name
# - config: stores the local configuration
# - description: stores the description of the repository

```

### detached head

- the scenario in which the HEAD points to one of the commit ids instead of pointing to a branch

### object

- where all the contents (versions) are stored
- every object in git is uniquely identified using its id
- object id is nothing but the object file name
  - first two characters represent directory inside objects
  - remaining 38 characters are used to create a file name
- types
  - file object
    - also called a blob object
    - stores the contents of a file in encrypted format
  - tree object
    - stores all the files needed to create a new commit (version)
  - commit object
    - stores the information about the commit
      - author name
      - author email
      - date time stamp
      - tree object file name(s)
      - commit message

### remote git

```bash

# get the current remote url
> git remote -v

# add the remote repository url to the local repo
# > git remote add <alias> <remote url>
> git remote add origin https://github.com/pythoncpp/dac2023-sept-pune.git

# push your local repository changes to the remote repository
# > git push <alias> <branch>
> git push origin main

```
