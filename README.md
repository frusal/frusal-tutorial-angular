# Frusal Angular Tutorial

🚧 *The project is in development and is not available for general public yet.*

Building an [Angular] application to access [frusal.com] workspace.

There are tutorials for other environments available, see [React Tutorial] and [Node Tutorial].

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
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
C:\Users\alex\AppData\Roaming\npm\ng -> C:\Users\alex\AppData\Roaming\npm\node_modules\@angular\cli\bin\ng

> @angular/cli@9.1.3 postinstall C:\Users\alex\AppData\Roaming\npm\node_modules\@angular\cli
> node ./bin/postinstall/script.js

? Would you like to share anonymous usage data with the Angular Team at Google under
Google’s Privacy Policy at https://policies.google.com/privacy? For more details and
how to change this setting, see http://angular.io/analytics. No

+ @angular/cli@9.1.13
added 271 packages from 206 contributors in 81.563s
```

```txt
C:\projects>ng new frusal-tutorial-angular
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? (Use arrow keys) CSS
> CSS
  SCSS   [ https://sass-lang.com/documentation/syntax#scss ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org ]
  Stylus [ http://stylus-lang.com ]
CREATE frusal-tutorial-angular/angular.json (3702 bytes)
CREATE frusal-tutorial-angular/package.json (1299 bytes)
CREATE frusal-tutorial-angular/README.md (1038 bytes)
CREATE frusal-tutorial-angular/tsconfig.json (489 bytes)
CREATE frusal-tutorial-angular/tslint.json (3125 bytes)
CREATE frusal-tutorial-angular/.editorconfig (274 bytes)
CREATE frusal-tutorial-angular/.gitignore (631 bytes)
CREATE frusal-tutorial-angular/browserslist (429 bytes)
CREATE frusal-tutorial-angular/karma.conf.js (1035 bytes)
CREATE frusal-tutorial-angular/tsconfig.app.json (210 bytes)
CREATE frusal-tutorial-angular/tsconfig.spec.json (270 bytes)
CREATE frusal-tutorial-angular/src/favicon.ico (948 bytes)
CREATE frusal-tutorial-angular/src/index.html (307 bytes)
CREATE frusal-tutorial-angular/src/main.ts (372 bytes)
CREATE frusal-tutorial-angular/src/polyfills.ts (2835 bytes)
CREATE frusal-tutorial-angular/src/styles.css (80 bytes)
CREATE frusal-tutorial-angular/src/test.ts (753 bytes)
CREATE frusal-tutorial-angular/src/assets/.gitkeep (0 bytes)
CREATE frusal-tutorial-angular/src/environments/environment.prod.ts (51 bytes)
CREATE frusal-tutorial-angular/src/environments/environment.ts (662 bytes)
CREATE frusal-tutorial-angular/src/app/app.module.ts (314 bytes)
CREATE frusal-tutorial-angular/src/app/app.component.html (25725 bytes)
CREATE frusal-tutorial-angular/src/app/app.component.spec.ts (993 bytes)
CREATE frusal-tutorial-angular/src/app/app.component.ts (227 bytes)
CREATE frusal-tutorial-angular/src/app/app.component.css (0 bytes)
CREATE frusal-tutorial-angular/e2e/protractor.conf.js (808 bytes)
CREATE frusal-tutorial-angular/e2e/tsconfig.json (214 bytes)
CREATE frusal-tutorial-angular/e2e/src/app.e2e-spec.ts (656 bytes)
CREATE frusal-tutorial-angular/e2e/src/app.po.ts (301 bytes)
√ Packages installed successfully.
```

</details>

You can open [Visual Studio Code] IDE with `code .` command and inspect the files created.

## Install frusal library

Run the following command to install frusal library dependency, configure `project.json` and create `frusal.json`. It would take you through a series of questions to complete.

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

## Daily usage

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

## Workspace Schema

Now, let's create persistent entity classes which is a part of our workspace schema. Usually, you would be doing it through frusal.com web UI, but for simplicity of this tutorial we are going to use a JavaScript to do that for us.

Create __`deploy-my-schema.js`__ file with the content you can download from [here](./deploy-my-schema.js) and run it:

```text
node --experimental-json-modules deploy-my-schema.js
```

<details><summary>See the console output</summary>

```text
Connecting to workspace "ws_001_unit_test"...
Creating classes at module "My Module"...
Schema changes deployed.
```

</details>

*Study this script if you want to manipulate schema objects (create persistent classes and fields) from within your application code.*

## Running

Create __`index.js`__ file with the content you can download from [here](./index.js).

Change the login call arguments in it.

Now, let's try to run it with the following command:

```text
node index.js
```

<details><summary>See the console output</summary>

```text
Login...
User name: Unit Test
Workspace: Unit Test
Module: My Module
Found the following books already exist: b0k3f0,b0k4f0,b0k5f0,b0k6f0,b0k7f0
New Book created: Bible
Done.
```

</details>

*We are not going into the details of how to use `session` object, `Stage` and `Transaction`, `Stage::query`, etc. It is out of scope for this tutorial. But you are encouraged to study the code in `index.js` as an example of library usage.*

[frusal.com]: https://frusal.com
[Angular]: https://angular.io
[Node.js]: https://nodejs.org
[Visual Studio Code]: https://code.visualstudio.com
[Git]: https://git-scm.com
[Angular Tutorial]: https://github.com/frusal/frusal-tutorial-angular
[React Tutorial]: https://github.com/frusal/frusal-tutorial-react
[Node.js Tutorial]: https://github.com/frusal/frusal-tutorial-node
