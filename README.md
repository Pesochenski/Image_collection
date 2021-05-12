## SPA Image collection

### Description

There is the small Single Page Application with beautiful appearance, created by myself in Figma, and some functional, like filter, axios with redux, and others. It was maded for presentation my skills with code for today, working with state management and writing types with TypeScript.

This SPA has 3 pages tuned with the help of routes. The idea of this application was a small image collection, maybe the simplest simulation of an any internet shop, in which you can open a page of each goods. Each page shows some skills. For example, on Collection page you can see images, which I get from backend, also created by me, and date filter for them, on About page you will see button with google icon, which will copy my mail on your clipboard, etc.

> In my opinion this repository can't have any serious applying, though you can use backend code from here like a basics for simple backend server with mongoDB.

## Installing

For running this repository you need use `git clone` command or to download 2 folders from here. They are "collection-back" and "collection-front". Open these folders in your IDE.

Before start you need to install all dependencies. For doing this in your IDE open terminal and type this command for both of the folders: 

    npm install 

The same command is:

    npm i

When all dependencies will be successfully installed ("node_modules" folder for each), type this command for both of these folders:

    npm start

If server successfully runs, you will see words "Server works" in terminal.

### Additionaly

You can see empty constants in ".env" file. If you will create a cluster on mongoDB, you need to push in your collection data from "data.json" file and then write here your account data for server working. 

Also check please your cluster and collection names, and, if they aren't same, change them with your's in ".env" file. 

When will be started client part of repository, it will be opened in your browser and you could see all what you want. 

### Finally

If you want you can give some feedback and write something about pluses and minuses, I wiil be glad to read it.
