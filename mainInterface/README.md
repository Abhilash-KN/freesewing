## Steps to follow after adding a new package

1. In the mainInterface directory, go to src/components and add a file named 'package_name.js'. For example, if your package is 'trouser', then add a file named 'trouser.js'.

2. Copy the entire code from Aaron.js file into the newly added file and replace every occurrence of 'aaron' with 'package_name'.

3. Go to mainInterface/src/components/images and add an image for the new package.

4. Go to mainInterface/src/components/Patterns.js file. Import your added image and add Link, Card component (see how it is done for the other packages for reference).

5. Go to mainInterface/src/App.js file and import your new package file (see other imports for reference). Then add a new Route for the new package.

6. Finally, run 'yarn start' from the mainInterface directory, the newly added package will be seen in the UI.
