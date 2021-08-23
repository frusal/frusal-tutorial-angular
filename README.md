# Frusal Angular Tutorial

🚧 *The project is in development and is not available for general public yet.*

Building an [Angular] application to access [frusal.com] workspace.

There are tutorials for other environments available, see [React Tutorial] and [Node.js Tutorial].

In this tutorial we are going to build a simple Angular application which meant to be running in a Browser. The application would access [frusal.com] workspace, it would create a class (which is like a table in many ways) in the workspace and then write some data to it.

## Prerequisites

Please make sure you have the following installed:

- Either: Windows, Linux or macOS
- [Node.js], which is an open source JavaScript runtime environment
- [Visual Studio Code], which is a popular open source IDE among Angular developers
- [Git] command line tools

Run the following command in the terminal to make sure node is installed properly:

```txt
npm --version
```

Create a new [Angular] project with the following commands. It would take you through a series of questions to complete, just choose the default answers.

```txt
npm install -g @angular/cli
ng new frusal-tutorial-angular
cd frusal-tutorial-angular
```

<details><summary>See the console output</summary>

```txt
C:\projects>npm install -g @angular/cli 
> @angular/cli@12.2.2 postinstall /usr/local/lib/node_modules/@angular/cli
> node ./bin/postinstall/script.js

+ @angular/cli@12.2.2
added 237 packages from 181 contributors in 9.681s
```

```txt
C:\projects>ng new frusal-tutorial-angular
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
> CSS
  SCSS   [ https://sass-lang.com/documentation/syntax#scss ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org ]
  Stylus [ http://stylus-lang.com ]
CREATE frusal-tutorial-angular/README.md (1067 bytes)
CREATE frusal-tutorial-angular/.editorconfig (274 bytes)
CREATE frusal-tutorial-angular/.gitignore (604 bytes)
CREATE frusal-tutorial-angular/angular.json (3141 bytes)
CREATE frusal-tutorial-angular/package.json (1085 bytes)
CREATE frusal-tutorial-angular/tsconfig.json (783 bytes)
CREATE frusal-tutorial-angular/.browserslistrc (703 bytes)
CREATE frusal-tutorial-angular/karma.conf.js (1440 bytes)
CREATE frusal-tutorial-angular/tsconfig.app.json (287 bytes)
CREATE frusal-tutorial-angular/tsconfig.spec.json (333 bytes)
CREATE frusal-tutorial-angular/src/favicon.ico (948 bytes)
CREATE frusal-tutorial-angular/src/index.html (307 bytes)
CREATE frusal-tutorial-angular/src/main.ts (372 bytes)
CREATE frusal-tutorial-angular/src/polyfills.ts (2820 bytes)
CREATE frusal-tutorial-angular/src/styles.css (80 bytes)
CREATE frusal-tutorial-angular/src/test.ts (788 bytes)
CREATE frusal-tutorial-angular/src/assets/.gitkeep (0 bytes)
CREATE frusal-tutorial-angular/src/environments/environment.prod.ts (51 bytes)
CREATE frusal-tutorial-angular/src/environments/environment.ts (658 bytes)
CREATE frusal-tutorial-angular/src/app/app.module.ts (314 bytes)
CREATE frusal-tutorial-angular/src/app/app.component.css (0 bytes)
CREATE frusal-tutorial-angular/src/app/app.component.html (24585 bytes)
CREATE frusal-tutorial-angular/src/app/app.component.spec.ts (1007 bytes)
CREATE frusal-tutorial-angular/src/app/app.component.ts (227 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
```

</details>

You can open [Visual Studio Code] IDE with `code .` command and inspect the files created.

## Install frusal library

Run [Frusal CLI] command to install frusal library dependency, configure `project.json` and create `frusal.json`. It would take you through a series of questions to complete.

*Note that this wizard is activated if `frusal.json` file does not yet exist.*

```text
npx frusal
```

<details><summary>See the console output</summary>

```txt
C:\projects\frusal-tutorial-angular>npx frusal
npx: installed 1 in 1.085s

Configuring frusal-tutorial-angular npm project with frusal library to enable frusal.com workspace connections

Please choose library type:
  [1] @frusal/library-for-browser: Bundled library designed to run in a browser with no external dependencies.
  [2] @frusal/library-for-node: Bundled library designed to run under node.js with no external dependencies.
  [3] @frusal/library: Core library with "autobahn" and "rxjs" dependencies.
Library type [1]: 1

Please choose generated source code language:
  [1] ECMAScript (aka JavaScript)
  [2] TypeScript
Source code [2]: 2

Source code model location [src\model]: src\model

Installing "frusal" npm dependency...

 * Frusal.com access library is successfully initialised for project frusal-tutorial-angular.
 * Next, please login and start updating your source code stabs and schema declarations.
 * You can use `npm run frusal login`, `npm run frusal update` or `npm run frusal watch` commands.

Please read the note above [ok]: ok
Thank you.
```

</details>

Now, lets login to [frusal.com] with the following command:

```text
npx frusal login
```

<details><summary>See the console output</summary>

```txt
Frusal login: unit.test@fruit-salad.tech
Password:
Please choose a workspace:
[1] Unit Test
Workspace [1]: 1

CONNECTED to workspace 'Unit Test' (ws_001_unit_test) as 'unit.test@fruit-salad.tech'
```

</details>

## Workspace schema

Now, let's create persistent entity classes which is a part of our workspace schema. Usually, you would be doing it through frusal.com web UI, but for simplicity of this tutorial we are going to use a JavaScript to do that for us.

Copy **[deploy-my-schema.mjs]** file from [this example][Example Schema by Script] and run it:

```text
node --experimental-json-modules deploy-my-schema.mjs
```

<details><summary>See the console output</summary>

```text
Connecting to workspace "ws_001_unit_test"...
Creating classes at module "My Module"...
Schema changes deployed.
```

</details>

*Study this script if you want to manipulate schema objects (create persistent classes and fields) from within your application code.*

## Local declarations

Check the status of the connection and the workspace:

``` text
npx frusal status
```

<details><summary>See the console output</summary>

```txt
CLI script to install and configure frusal.com workspace access library with static type checking against live schema.

User preferences: C:\Users\alex\.npm-frusal (first in ancestry)
Base directory: C:\projects\frusal-tutorial-angular
Config file: frusal.json
Source code model location: src\model

CONNECTED to workspace 'Unit Test' (ws_001_unit_test) as 'unit.test@fruit-salad.tech'

Classes in 'My Module':
 - Book
 ```

</details>

Update (or create, in our case), the local model source code stubs and TypeScript declarations (TSD). The stubs are meant to be taken over by You for further development and maintenance. The TSDs are maintained by `npx frusal` script and used by [Visual Studio Code] IDE for source code static analysis, type validation and auto completion (IntelliSense).

```text
npx frusal update
```

<details><summary>See the console output</summary>

```txt
Updating schema changes for workspace 'Unit Test' (ws_001_unit_test), connected as 'unit.test@fruit-salad.tech'
Source code model location: src\model

Updating on 4/29/2020, 11:16:42 AM...
  src\model\my-module.rt.d.ts
  src\model\my-module.ts
Done
```

</details>

*Have a look at  [`my-module.rt.d.ts`](./my-module.rt.d.ts) and [`my-module.js`](./my-module.js) created. The file names matching the module name as defined at frusal workspace. If there any classes defined at workspace module schema, they would be reflected there.*

We could run the script with `watch` flag to keep schema files up to date in real time:

```text
npx frusal watch
```

<details><summary>See the console output</summary>

```txt
Watching schema changes at workspace 'Unit Test' (ws_001_unit_test), connected as 'unit.test@fruit-salad.tech'...
Source code model location: src\model

Updating on 4/29/2020, 11:17:59 AM...
Done
```

</details>

*This could be useful during development. Use ^C to terminate the process.*

## Create application

Copy and overwrite the files in your `/src/app` directory with copies downloaded from [here](./src/app).

<details><summary>See wget command examples</summary>

```txt
cd src/app
wget https://raw.githubusercontent.com/frusal/frusal-tutorial-angular/master/src/app/app.component.css
wget https://raw.githubusercontent.com/frusal/frusal-tutorial-angular/master/src/app/app.component.html
wget https://raw.githubusercontent.com/frusal/frusal-tutorial-angular/master/src/app/app.component.ts
wget https://raw.githubusercontent.com/frusal/frusal-tutorial-angular/master/src/app/app.module.ts
```

</details>

Have a look at [`src/app/app.component.ts`](./src/app/app.component.ts), which has main logic. Change the login call arguments in it.

## Running

Now, let's try to run it with the following command:

```text
npm start
```

<details><summary>See the console output</summary>

```text
chunk {main} main.js, main.js.map (main) 1.65 MB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 141 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.15 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 9.96 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.02 MB [initial] [rendered]
Date: 2020-05-01T02:12:57.836Z - Hash: bc1b23cb0f82b002ed69 - Time: 6542ms
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
: Compiled successfully.
```

</details>

Open your browser pointing to the http://localhost:4200/ location.

*We are not going into the details of how to use `session` object, `Stage` and `Transaction`, `Stage::query`, etc. It is out of scope for this tutorial. But you are encouraged to study the code in `src/app/app.component.ts` as an example of library usage.*

[frusal.com]: https://frusal.com
[Angular]: https://angular.io
[Node.js]: https://nodejs.org
[Visual Studio Code]: https://code.visualstudio.com
[Git]: https://git-scm.com
[Frusal CLI]: https://github.com/frusal/frusal-cli#readme
[Angular Tutorial]: https://github.com/frusal/frusal-tutorial-angular#readme
[React Tutorial]: https://github.com/frusal/frusal-tutorial-react#readme
[Node.js Tutorial]: https://github.com/frusal/frusal-tutorial-node#readme
[Example Schema by Script]: https://github.com/frusal/frusal-example-schema-by-javascript#readme
[deploy-my-schema.mjs]: https://github.com/frusal/frusal-example-schema-by-javascript/blob/master/deploy-my-schema.mjs