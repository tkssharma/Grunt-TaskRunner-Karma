Grunt
-----

Grunt has become an essential tool for demanding projects. Look through the Gruntfile.coffee for ideas for your own project.

Bower
-----

Bower has been something I've played around for a while. While its great at syncing down the latest resource packages such as bootstrap, fontawesome, it downloads the entire repository.It auto-inserts the css and script tags in the layout file. The bloated files bower downloads conflicts /w sails-linker. For those who prefers to manually update the css/js links, bower is still a very useful package manager for you.

Git
---

This is essential to any collaborative project for both version control and deployment.

Notable highlights:
- putting .gitkeep in any empty folders, otherwise git won't sync them. This is important for the cache folder that Volt requires
- gitattributes Auto detect text files and perform LF normalization. This is important if you have both mac and window teammates working on the same project
- do not sync sourcemap files

Installation 
------------

- its already setup you just need to run some command to pull NPM dependancy 
- download or clone to local workspace so that you can have .json file with you also install npm before starting .
- just take alook on package.json and bower.json
- run sudo npm install  (it will install node-modules)
- Now after getting all Modules handy  just run grunt task 
- grunt , grunt-dev , grunt-test 


