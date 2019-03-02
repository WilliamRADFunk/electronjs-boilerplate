
electronjs-boilerplate
======================

(Complete) - Simple "hello world" boilerplate application using ElectronJs with Typescript, Gulp, and SCSS.

* * *

First Steps
-----------

1.  Navigate to the root folder where you want your project to reside.
    
2.  Run `git clone https://github.com/WilliamRADFunk/electronjs-boilerplate.git`
    
3.  Run `npm install`. If failure, see Common Gotchas section below.
    
4.  Change the name `electronjs-boilerplate` to the name of your choice in the `package.json` file (multiple locations in this file), the title in the `index.html` file, the `gulpfile.babel.js` file, and the `README.md` file.
    

* * *

Classes
-------

Detailed [documentation](docs/README.md)

* * *

Available Command Line Options
------------------------------

`npm run build` will build your project (for your platform), depositing all finished files in the created `build/` folder.  
  

`npm run build:all` will build your project (for all platforms), depositing all finished files in the created `build/` folder.  
  

`npm run start` will build your project, depositing all finished files in the created `dist/` folder, and launch it.  
  

`npm run lint` will search the scss and typescript files for common style issues and alert you of any it finds.  
  

`npm run readme` will update the docs folder with all off the typedoc-friendly commenting you've made in you typescript files.  
  

`npm run test` won't work. It isn't implemented yet.  
  

New to Gulp
-----------

\-\- Make sure to install Gulp at the global level, as this is a necessary step to make the boilerplate's scripts run.  
  

`npm install -g gulp`

* * *

Common Gotchas
--------------

--Might get a failure to fully install when running `npm install`  
  

Try running `npm install --ignore-scripts`  
  

\-\- Might get the error  
"Error: ENOENT: no such file or directory, scandir 'your-path/electronjs-boilerplate\\node_modules\\node-sass\\vendor'"  
  

To remedy this, simply run `npm rebuild node-sass`  
  

\-\- If you're running the `npm run readme` command, and your classes are not all present.  
  

Make sure you aren't importing a capitalized version of the name (ie. `import { Doug } from './Doug'` when it should in fact be `import { Doug } from './doug'`) assuming of cou

## Index

### External modules

* ["app"](modules/_app_.md)
* ["example"](modules/_example_.md)
* ["main"](modules/_main_.md)
* ["renderer"](modules/_renderer_.md)

---

