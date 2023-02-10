➊ git init

➀ Initializes an existing directory in the local file system as a Git repository.

❯ git init

➋ git clone

Retrieves an entire repository from a hosted location via a valid Git URL.

➀ Cloning from remote repository
❯ git clone [URL]

➁ Cloning a specific branch
❯ git clone --branch <name> [url]
  
  ➌ git add

➀ Add a file to the staging area

❯ git add [file]

➁ Add all files to the staging area

❯ git add -A

➂ Add all deleted and modified files only to staging area

❯ git add -u

➃ Add all files in the current working directory to the staging area

❯ git add .
  
➍ git rm

➀ Deletes the file from the project and stages the removal for commit.

❯ git rm [file]
  
 ➎ git mv

➀ Changes an existing file path and stages the move.

❯ git mv [existing-path] [new-path]
  
➏ git commit

➀ Commits the staged contents as a new commit snapshot.

❯ git commit -m "message"

➁ Adds modified files to the staging and, commits

❯ git commit -a -m "message"

➂ Fixes previous commit message

❯ git commit --amend -m "message"
  
➐ git branch

List, Create or, Delete Branches

➀ List branches
❯ git branch

➁ Create a new Branch at the current commit
❯ git branch [branch-name]
 
➂ Delete a Branch
❯ git branch -d [branch-name]
  
➑ git status

➀  Shows the paths of modified files in the working directory.

❯ git status
  
➒ git diff

Show changes between commits.

➀ To see the diff of what is changed, but not staged
❯ git diff

➁ To see the diff of what is staged, but not committed
❯ git diff --staged

➂ To see the diff between the 2 branches
❯ git diff BranchA...BranchB
  
➓ git log

➀ Shows the commit history for the currently active branch.

❯ git log

➁ Shows the commits on branchA that are not on branchB.

❯ git log branchB..branchA

➊➊ git checkout

It is used to switch to another branch.

➀ Switch to another branch and, check it out in your working directory

❯ git checkout [branch-name]

➁ Switch to another branch (create if does not exist)

❯ git checkout -b [branch-name]

➊➋ git merge

➀ Join 2 or more development histories together.

❯ git merge [branch]
➊➌ git fetch

➀ Fetch branches and/or tags from one or more other repositories.

❯ git fetch [alias]

✧ Note: You can use git fetch to know the changes made in the remote repo/branch since your last pull.
  
 ➊➍ git pull

➀ Fetch and merge any commits from the tracking remote branch.

❯ git pull

 ➊➎ git push

➀ Transmit local branch commits to the remote repository branch.

❯ git push [alias]
  
➊➏ git rebase

➀ Applies any commits of the current branch ahead of the specified one.

❯ git rebase [branch-name]
➊➐ git revert

➀ Reverts some existing commits.

❯ git revert <commit>
  
➊➑ git reset

Resets current HEAD to the specified state.

➀ Unstages a file while retaining the changes in the working directory.

❯ git reset [file]

➁ Clears staging area and rewrites working tree from specified commit.

❯ git reset --hard [commit]
  
 ➊➒ git stash

Temporarily stores modified, tracked files to change branches

➀ Save modified, staged changes
❯ git stash

➁ List StackOrder of stashed file changes
❯ git stash list

➂ Write working from top
❯ git stash pop

➃ Discard changes from top
❯ git stash drop
  
20. git reflog

➀ See reference logs (reflog) of HEAD for recent commits, pulls, reverts etc.

❯ git reflog

➁ Get a complete reflog of all refs

❯ git reflog show --all

➂ To see the reflog for a specific branch

❯ git reflog show branchA
  
➋➊ git config

➀  Configures user information used across all local repositories.

❯ git config --global user. name “username”

❯ git config --global user. email “email”

➁  To create an alias command

❯ git config --global alias.alc “!git add -A && git commit -m”
  
