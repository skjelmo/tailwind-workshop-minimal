# Tailwind Workshop With Minimal Boilerplate
>Minimal boilerplate with [TailwindCSS](https://tailwindcss.com/)

### VSCode 
This workshop uses VSCode since the Tailwind creators maintain a VSCode extension providing IntelliSense for Tailwind.

> However, Tailwind is supported in [WebStorm](https://www.jetbrains.com/webstorm/whatsnew/#support-for-tailwind-css) as of monday, and in [Rider](https://blog.jetbrains.com/webstorm/2020/11/webstorm-2020-3-eap-7/#tailwind_css_support), PhpStorm and PyCharm under the Early Access Program.

# Setup
- Get [VSCode](https://code.visualstudio.com/)  

Consider the [Auto-Open Markdown Preview](https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview) for reading the `README.md`-files in VSCode.
## VSCode Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)


# Getting started

- ```npx tailwindcss-cli@latest build ./tailwind.css -o ./public/tailwind.css``` 🧙‍♀️
- Right-click desired HTML-file, and click `Open with Live Server` 🚀
- Edit the HTML and enjoy live reload 😎

# What is this setup 🤔?
## IntelliSense
Provides autocomplete, linting, hover-preview and syntax-highlighting. The *awesomeness* lies in that it includes all the customizations in `tailwind.config.js` that form your design system.

## Headwind
Enforces consistent ordering of classes. Which reduces the cognitive load of dealing with multiple classnames.

## .vscode-folder
VSCode's default CSS validator disallows unknown at-rules, which includes a few Tailwind at-rules (`@tailwind`, `@responsive` etc.).   

These rules are added through the settings in the `.vscode`-folder to prevent the built-in CSS validator from flagging them as errors. 

>The core of VSCode's CSS support is implemented in the [vscode-css-languageservice](https://github.com/microsoft/vscode-css-languageservice) which supports [loading custom CSS](https://github.com/microsoft/vscode-css-languageservice/blob/master/docs/customData.md). Under the `.vscode`-folder we are adding custom CSS rules for Tailwind to the CSS Language Service based on [this Stack Overflow answer](https://stackoverflow.com/questions/47607602/how-to-add-a-tailwind-css-rule-to-css-checker/61333686#61333686).

In addition, the line `"editor.renameOnType": true` automatically reflects changes you make in an opening HTML tag with the corresponding closing tag, so that you don't have to edit both. 

## Live Server
Simple solution to launch a local development server with live reload.

# Rebuild CSS
```npx tailwindcss-cli@latest build ./tailwind.css -o ./public/tailwind.css```

## But why? 🤔
- Changes in the `tailwind.config.js`-file and `tailwind.css`-file are not not reflected in `/public/tailwind.css` until the CSS has been rebuilt.