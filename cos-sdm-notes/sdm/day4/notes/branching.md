# git branching

- main branch

  - is also known master branch
  - it contains
    - latest code
    - crash free
    - bug free
    - well tested code
  - every developer creates a new branch from main branch before starting any work

- workflow
  - create a new branch
  - add the changes into the newly created branch
  - pass the changes to the tester (by either building the app or deploying in staging environment)
  - wait till tester tests all the changes
  - once developer gets confirmation from tester, the developer merges the changes back to the main or master branch

```bash

# get the list of branches
> git branch

# create a new branch
# this command DOES NOT switch to the newly created branch
# > git branch <new branch name>
> git branch dev1

# to check the current branch
# - use git branch command and get the branch name with *
# - use git status command and get the branch name

# switch the current branch
# > git checkout <branch name>
> git checkout dev1

# delete a branch
# note: you CAN NOT delete the current branch
# > git branch -d <branch name>
> git branch -d dev1

# create a new branch and checkout immediately
# > git checkout -b <new branch>
> git checkout -b dev1

# merge one branch to another
# note: first make sure you are in the required branch
# > git merge <branch name>
# merge dev1 branch in main branch (provided you are already on main branch)
> git merge dev1

```
