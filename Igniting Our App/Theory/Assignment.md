# Chapter 02 - Assignment - Igniting our App

## What is `NPM`?
NPM is used as Node Package Manager.`NPM is installed with NodeJS`.
To initialize npm we use the following command:

```
npm init
```

On running this command in terminal, some setup steps takes place which basically used to manage/configure our `pacakage.json` file.
We can also skip the setup steps by using the following command:

```
npm init -y
```
In this case also, package.json file is created but without configuration.`package.json` file is created automatically after initializing the npm.

After initializing the setup, we can now install any package by using the following command.
```
npm install <package-name> 
```


`Magic of NPM` If in future, you move your codebase from one machihne to another  then you can recreate the same environment just by using the following command. It will install all the dependencies required in the project.

```
npm install
```

## What is `Parcel/Webpack`? Why do we need it?

`Parcel/Webpack` are known as `Bundlers`. Bundlers are basically the used for development and production purposes. When we create any application, it includes a lot of lines of code , different files including html , css , script files. So when we directly use this application for production build then the application will have a lot of performance issues , maybe some wrong order dependency issue and many other issues.

So here,Bundlers come into the picture. It is a tool that combines multiple files into a single one that is `production ready` loadable in the browser. It saves from the pain of dependencies by constructing a dependency order , minify our code , optimize the code by renaming variables , clearing console and many other things.  

## What is `.parcel-cache`
Parcel uses the concept of `caching` for reducing the build time. Basically, in this folder, Parcel maintains the information regarding your project. For keeping the track of changes, it uses `file-watcher algorithm (C++)`. 

This folder is created when build is created for the first time. So first time, Parcel take little more time as it goes through the entire code files. But next time if we execute the code again, then it will take very less time as  it doesn't have to re-parse and re-analyze everything from scratch. 

## What is `npx` ?
npx is a tool that is used to `execute the packages`. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

For-example: On executing the following command, Parcel builds your application with all the dependencies you point to

```
npx parcel <entry-point> 
```
## What is difference between `dependencies` vs `devDependencies`
`dependencies` basically refers to all the packages that are required in both the development as well as the production environment.

`devDependencies` basically refers to all the packages that we require only in the development environment such as, parcel, webpack, vite, mocha. These packages are necessary only while you are developing your project, not necessary on production.

Both are defined in the `package.json` file.

To install a package as `devDependencies` we use the following command:
```
npm install -D <package-name>
```
To install a package as `dependencies` we use the following command:
```
npm install <package-name>
```
## What is Tree Shaking?

Tree Shaking is one of the features of Parcel bundler that is used to optimize our code for the build. It basically refers to removing the `dead zone of the code`, the part of the code which is never used while developing the application.

## What is Hot Module Replacement?

`Hot Module Replacement` is one of the `superpowers` of Parcel. It improves the development experience by automatically updating the modules in the browser without needing a whole page refresh.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

Parcel is a `Beast`.Some of the superpowers of Parcel are:
- `Hot Module Replacement`  : `Hot Module Replacement` is one of the superpowers of Parcel. It improves the development experience by automatically updating the modules in the browser without needing a whole page refresh.
- `Caching while Development` :  Parcel maintains a `.parcle-cache` folder which contains information regarding the code files and hence refers to this folder for the development/production build. This reduces the build time.
- Manage Port Number
- `File Watcher algorithm`  : Parcel uses this algorithm (written in C++) to detect the changes in the code.  
- Minification of the code 
- Optimize the code 
- Bundling
- Dev and Production build
- Compression
- Image Optimization
- Compatible with older versions of browser

## What is `.gitignore`? What should we add and not add into it?
The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository. The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore. package-lock.json should not add into your .gitignore file.

The entries in this file can also follow a matching pattern.

'*' is used as a wildcard match

/ is used to ignore pathnames relative to the .gitignore file

'#' is used to add comments to a .gitignore file

This is an example of what the .gitignore file could look like:

```
Ignore node_modules folder

node_modules

Ignore all text files

*.txt
```

## What is the difference between `package.json` and `package-lock.json`
The `“package.json”` file defines the rules required to run your application and install dependencies. 

On the other hand, the `“package-lock.json”` file holds detailed information on all the dependencies installed based on the package.json rules.This file locks the version of your module but also locks the version of sub-dependencies required by your module.

## Why should I not modify `package-lock.json`?
We should `never manually modify the pacakage-lock.json file` 

- `Dependency consistency:` The package-lock.json file ensures that all team members have the exact same set of dependencies and versions installed, which helps to prevent potential conflicts and ensures that the project can be reliably built and run on different machines. If you manually modify this file, it can cause dependency inconsistencies and conflicts between different team members' environments.

- ` Automatic generation:` The package-lock.json file is generated automatically by npm based on the packages and versions specified in the package.json file. Modifying this file manually can cause discrepancies between the two files, potentially leading to issues with package installation and versioning.

## What is `node_modules` ? Is it a good idea to push that on git?
`node_modules` is kind of database of npm. So, whenever we install something[like parcel] in our project, it gets included in node_modules. `Don't push node_modules` in github because it contains lots of files(more than 100 MB), it will cost you memory space.
## What is the `dist` folder?
The /dist stands for `distributable`.The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.
## What is `browserlists`
 `browserlists` allows us to make our compatible with the older versions of browsers. This can be done by including the browserlists in the package.json file as:
```
browserlists : [
    "last 2 versions"  
]
```
For various options for browserlists you can refer: 
https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
