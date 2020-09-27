# How to use gitignore

**`target/`** - Ignores every folder (due to the trailing /) recursively

**`target`** - Ignores every file or folder named target recursively

**`/target`** - Ignores every file or folder named target in the top-most directory (due to the leading /)

**`/target/`** - Ignores every folder named target in the top-most directory (leading and trailing /)

**`*.class`** - Ignores every every file or folder ending with .class recursively


**Source**: [Using .gitignore the Right Way](https://labs.consol.de/development/git/2017/02/22/gitignore.html) by Christian Guggenmos