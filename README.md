<p align="center">
  <a href="http://mdbootstrap.com/docs/react/">
    <img width="500" src="https://mdbootstrap.com/img/Marketing/general/logo/huge/mdb-react.png">
  </a>
</p>

<h1 align="center">React Bootstrap with Material Design</h1>

<p align="center">
Built with <b>React and Bootstrap 4</b>. Absolutely <b>no jQuery</b>.
</p>

<p align="center">
<b>400+</b> material UI elements, <b>600+</b> material icons, <b>74</b> CSS animations, SASS files and many more.
</p>
  
<p align="center">
All fully responsive. All compatible with different browsers.
</p>

<p align="center">
  <a href="https://npmcharts.com/compare/mdbreact?minimal=true"><img src="https://img.shields.io/npm/dm/mdbreact.svg" alt="Downloads"></a>
  <a href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design/blob/master/license.pdf"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
  <a href="https://badge.fury.io/js/angular-bootstrap-md"><img src="https://badge.fury.io/js/mdbreact.svg" alt="npm"></a>
  <a href="https://twitter.com/intent/tweet/?text=Thanks+@mdbootstrap+for+creating+amazing+and+free+Material+Design+for+Bootstrap+4+UI+KIT%20https://mdbootstrap.com/docs/react/&hashtags=react,code,webdesign,bootstrap"><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"></a>
</p>

<p align="center">
  <a href="https://mdbootstrap.com/docs/react/" target="_blank">
    <img width="700" src="https://mdbootstrap.com/img/Marketing/products/react/mdb-free.jpg" alt="logo">
  </a>
</p>

---

## Table of Contents

* [Other Technologies](#other-technologies) 
* [Demo](#demo)
* [Version](#version)
* [Quick start](#quick-start)
* [Available commands](#available-commands)
* [How to install MDB via npm](#how-to-install-mdb-via-npm)
* [Supported Browsers](#supported-browsers)
* [Documentation](#documentation)
* [Pro version](#pro-version)
* [Highlights](#highlights)
* [Useful Links](#useful-links)
* [Social Media](#social-media)

# Other Technologies

[<img src="https://mdbootstrap.com/img/Marketing/general/logo/small/jquery.png"/>](https://mdbootstrap.com/docs/jquery/)[<img src="https://mdbootstrap.com/img/Marketing/general/logo/small/angular.png"/>](https://mdbootstrap.com/docs/react/)[<img src="https://mdbootstrap.com/img/Marketing/general/logo/small/vue.png"/>](https://mdbootstrap.com/docs/vue/)


# Demo:

[Main demo](https://mdbootstrap.com/docs/react/components/demo/)

# Version:

- MDBReact 4.13.0
- React 16.8.1

# Quick start

- Clone following repo:

```bash
git clone https://github.com/mdbootstrap/react-bootstrap-with-material-design .
```

note "." at the end. It will clone files directly into current folder.

- Run `npm i`
- Run `npm start`
- Voilà! Open browser and visit http://localhost:3000

Now you can navigate to [our documentation](http://mdbootstrap.com/docs/react/), pick any component and place within your project.

# Available commands

- npm start - runs the app in development mode.
- npm run remove-demo - remove demo directory from your project and generate a boilerplate for your app
- npm run build - builds the app for production to the build folder.
- npm test - runs the test watcher in an interactive mode.

# How to install MDB via npm:

- create new project `create-react-app myApp`
- `cd myApp`
- `npm install --save mdbreact`
- Import style files into the src/index.js before the App.js file:

```javascript
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
```

### Run server

```bash
npm start
```

# Supported browsers

MDBootstrap supports the **latest, stable releases** of all major browsers and platforms.

Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported. However, MDBootstrap should (in most cases) display and function correctly in these browsers as well.

### Mobile devices

Generally speaking, MDBootstrap supports the latest versions of each major platform’s default browsers. Note that proxy browsers (such as Opera Mini, Opera Mobile’s Turbo mode, UC Browser Mini, Amazon Silk) are not supported.

|  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox  |  [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari   | Android Browser & WebView  |                  [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br> Miscrosoft Edge                      |
|:--------------------:|:---------------------------:|:----------------------------:|:----------------------------:|:----------------------------:|:-------------------------------------------------------------------------:|
| Android | Supported | Supported | N/A | Android v5.0+ supported | Supported |
| iOS | Supported | Supported | Supported | N/A | Supported |
| Windows 10 Mobile | N/A | N/A | N/A | N/A | Supported |

### Desktop browsers

Similarly, the latest versions of most desktop browsers are supported.

|  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome  |  [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br> Internet Explorer  |  [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Internet Explorer / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br> Edge  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera                  |       [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari       |
|:--------------------:|:-----------------------------:|:------------------------------:|:------------------------------:|:----------------------------:|:-------------------------------------------------------------------------:|:------------------------------:|
| Mac | Supported | Supported | N/A | N/A | Supported | Supported |
| Windows  | Supported | Supported | N/A | Supported | Supported | Not supported |


# Documentation:

[Huge, detailed documentation avilable online](http://mdbootstrap.com/docs/react/)

# PRO version:

[React Bootstrap with Material Design PRO](https://mdbootstrap.com/products/react-ui-kit/)

# Highlights:

**Bootstrap 4**
Up-to-date with the latest standards of Bootstrap 4 and all the best it has to offer.

**Detailed documentation**
Intuitive and user-friendly documentation, created with a copy-paste approach.

**No jQuery**
Writing you code with pure React is now quicker, easier, and cleaner.

**Cross-browser compatibility**
Works perfectly with Chrome, Firefox, Safari, Opera and Microsoft Edge.

**Frequent updates**
Expect any bugs being fixed in a matter of days.

**Active community**
MDB is broadly used by professionals on multiple levels, who are ready to aid you.

**Useful helpers**
Reduce the frequency of highly repetitive declarations in your CSS.

**Technical support**
Every day we help our users with their issues and problems.

**SASS files**
Thought-out .scss files come in a compile-ready form.

**Flexbox**
Full support of Flexbox layout system lets you forget about alignment issues.

### Support MDB developers

- Star our GitHub repo
- Create pull requests, submit bugs, suggest new features or documentation updates
- Follow us on [Twitter](https://twitter.com/mdbootstrap)
- Like our page on [Facebook](https://www.facebook.com/mdbootstrap)

A big ❤️ **thank you to all our users** ❤️ who are working with us to improve the software. We wouldn't be where we are without you. 

# Useful Links:

[Getting started](https://mdbootstrap.com/docs/react/getting-started/download/)

[Quick Start](https://mdbootstrap.com/docs/react/getting-started/quick-start/)

[Changelog](https://mdbootstrap.com/docs/react/changelog/)

# Social Media:

[Twitter](https://twitter.com/MDBootstrap)

[Facebook](https://www.facebook.com/mdbootstrap)

[Pinterest](https://pl.pinterest.com/mdbootstrap)

[Google+](https://plus.google.com/u/0/b/107863090883699620484/+Mdbootstrap/posts)

[Dribbble](https://dribbble.com/mdbootstrap)

[LinkedIn](https://www.linkedin.com/company/material-design-for-bootstrap)

## Contact:

contact@mdbootstrap.com
