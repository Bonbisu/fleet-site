# Object-oriented Programming in JavaScrpt - ES6

We've start setting our environment:
- Install NodeJS
- Initialize a JS package
    - Create package.json
    - Select and install dependencies
    - Dev package
- Run Node server

### Installing Node

Working on Ubuntu, we can install node with `apt` unsing this command:

```sh
sudo apt install nodejs
```

Node already comes with Node Package Manager (`npm`). With _NodeJS_ installed, we can begin setting up our project.

### Initializing a Package

Node provide some auto config tools to make more easy to install all dependencies that project have. To initialize a _NodeJS_ project we can run:

```sh
npm init
```

Running this command, _NodeJS_ will ask some information about the project like _project name, version, description, license and author._

#### Package.json

Providing these informations, _NodeJS_ automatically creates `package.json`, with all configurations we set with `npm init`. In this file contains all **dependencies** require to run the project.

#### Dependencies

When developing applications, sometimes we need some files to depend on, such as API's, Libraries or files that don't make sense rebuild from scratch.
We can install these packages from `npm`.

```sh
npm install -save package
```

This command above will install a package and automatically put as dependency on `package.json` to install when run it.

In this project we will use `es6-module-loader` and `traceur`. So:

```sh
npm install -save es6-module-loader traceur
```
We can also install dependencies to run as _Developer_, creating a `dev` state to project (also can create test state). Package dependencies for dev, will _only be installed when running a dev build_. This project will uses `lite-server` as dev dependency:

```sh
npm install -save-dev lite-server
```

One last thing to do: **set a dev build script to run** `lite-server`, adding some code inside `package.json`.

```json
.
.
.
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "lite-server" // add this to allow run dev build
  },
.
.
.
```

Now, all dependencies for this project are set. Let's run the dev build to start:

```sh
npm run dev
```

Lite-server will open a browser pointed to our project, on `http://localhost:3000` for our server, and some others connection ports.

