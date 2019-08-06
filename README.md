


initialize package.json file:

 npm init -y

 and ts.config file:

 tsc --init


install nodemon and concurrently:

npm install nodemon concurrently

Create src directory and build directory inside root project folder.

Create index.ts (root of the application) in src folder.

Configure the TypeScript compiler.
  Tell it that src contains all of the source code and build is going to contain all of the outputted compiled code

  Inside tsconfig.json:

    uncomment "outDir" and "rootDir" and change as follows:

    "outDir": "./build,
    "rootDir": "./src,s

In package.json, set up scripts to build, run, and run those two command simultaneously:

"scripts": {
  "start:build": "tsc -w", /* runs typescript comiler in watch mode */
  "start:run": "nodemon build/index.js",    /*nodemon will automatically recompile this file anytime rerun code
  "start": "concurrently npm:start:*"   /* npm: is telling concurrently to look at package.json file and find scripts section, and then run anything with pattern start:*  */
}

install type definition file to use file system (fs) Node. Node type definition file is not already included.   

  npm install @types/node