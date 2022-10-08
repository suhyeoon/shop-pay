Hello, My Friends  
Thank you for having interest in this repository ! 

To use this application, 

1. make dev.js file inside config folder 
2. put mongoDB info into dev.js file 
3. Type  " npm install " inside the root directory  ( Download Server Dependencies ) 
4. Type " npm install " inside the client directory ( Download Front-end Dependencies )


If you have problem, feel free to ask me ^^ 

You can watch the tutorial for this app.

https://www.youtube.com/channel/UCFyXA9x8lpL3EYWeYhj4C4Q?view_as=subscriber



```
shop-master
├─ client
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  └─ manifest.json
│  ├─ README.md
│  ├─ src
│  │  ├─ components
│  │  │  ├─ App.js
│  │  │  ├─ Config.js
│  │  │  ├─ utils
│  │  │  │  ├─ FileUpload.css
│  │  │  │  └─ FileUpload.js
│  │  │  └─ views
│  │  │     ├─ Footer
│  │  │     │  └─ Footer.js
│  │  │     ├─ LandingPage
│  │  │     │  └─ LandingPage.js
│  │  │     ├─ LoginPage
│  │  │     │  └─ LoginPage.js
│  │  │     ├─ NavBar
│  │  │     │  ├─ NavBar.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ LeftMenu.js
│  │  │     │     ├─ Navbar.css
│  │  │     │     └─ RightMenu.js
│  │  │     ├─ RegisterPage
│  │  │     │  └─ RegisterPage.js
│  │  │     └─ UploadProductPage
│  │  │        └─ UploadProductPage.js
│  │  ├─ hoc
│  │  │  └─ auth.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ serviceWorker.js
│  │  ├─ setupProxy.js
│  │  ├─ _actions
│  │  │  ├─ types.js
│  │  │  └─ user_actions.js
│  │  └─ _reducers
│  │     ├─ index.js
│  │     └─ user_reducer.js
│  └─ yarn.lock
├─ package-lock.json
├─ package.json
├─ README.md
├─ server
│  ├─ config
│  │  ├─ key.js
│  │  └─ prod.js
│  ├─ index.js
│  ├─ middleware
│  │  └─ auth.js
│  ├─ models
│  │  ├─ Product.js
│  │  └─ User.js
│  └─ routes
│     ├─ product.js
│     └─ users.js
├─ uploads
└─ yarn.lock

```