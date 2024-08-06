# The Wild Oasis - The best admin dashboard React web-app you can find!

> #### _The final project from Jonas Schmedtmann's Ultimate React course_

<img src="https://github.com/Egormity/the-wild-oasis/blob/master/assets/Preview-main.png?raw=true"/>

**The Wild Oasis** &ndash; the e-commerce website I've been creating along with Jonas, meanwhile studying advanced react patterns and best practices! I don't consider the way we wrote our code the cleanest and most efficient, but it was all done for the learning purposes. I truly appreciate the enormous amount of work he's done to teach us in his course, if you need to learn **frontend**, I 100% recommend his courses ❤️‍🔥

### **_Live Version on Vercel_** &ndash; **[The Wil Oasis](https://egormity-wild-oasis.vercel.app)**

```
The Wild Oasis
      │
      ├───public
      └───src
          ├───context
          ├───data
          │   └───cabins
          ├───features
          │   ├───authentication
          │   ├───bookings
          │   ├───cabins
          │   ├───check-in-out
          │   ├───dashboard
          │   └───settings
          ├───hooks
          ├───pages
          ├───services
          ├───styles
          ├───ui
          └───utils
```

### In this project such technologies and libraries were used:

<!-- - <img alt="Static Badge" src="https://img.shields.io/badge/ReactJavascript-as_main_idea_of_this_work-blue">
- <img alt="Static Badge" src="https://img.shields.io/badge/Vite-for_local_devolopment_server_and_compilor-blue">
- <img alt="Static Badge" src="https://img.shields.io/badge/React_Query-for_recieving_and_manipulating_with_data_from_backend-blue">
- <img alt="Static Badge" src="https://img.shields.io/badge/React_Router-for_handling_page_routing-blue">
- <img alt="Static Badge" src="https://img.shields.io/badge/React_Hook_Form-for_handling_form-blue">
- <img alt="Static Badge" src="https://img.shields.io/badge/React_Icons-for_awesome_icons-blue">
- <img alt="Static Badge" src="https://img.shields.io/badge/React_Hot_Toast-for_pretty_and_easy_to_use_toasts-blue">
- <img alt="Static Badge" src="https://img.shields.io/badge/Tailwind-for_styling-blue">
- <img alt="Static Badge" src="https://img.shields.io/badge/Local_Storage-for_storing_fake_cart_and_user_registration-blue"> -->

- **JavascriptReact** - as main idea of this work
- **Vite** - for local devolopment server and compilor
- **Supabase** - for "backend"
- **React Query** - for handking with data from backend
- **React Router** - for handling page routing
- **Recharts** - for creating gorgeous charts
- **React Hook Form** - for handling forms
- **React Icons** - for awesome icons
- **React Hot Toast** - for pretty and easy to use toasts
- **Styled Components** - for styling
- **Css variables** - for implementing dark mode

---

> ### _About The Wild Oasis:_

🀄 Dynamic Culinary Hub: Fully functional fictional admin dashboard featuring extensive tables, charts, uploading, changing, and deleting data, much more.

🎇 UI Efficiency via Pagination and Motion: Implemented pre-feching paggination for user-friendly menu, blog page division, optimizing exploration. Some fancy and small animations were added to make user expirience more exciting.

📑 Efficient Data Management: Data is managed with up-to-date technologies. All the data is stored in Supabase, handled with React Query, which gives up an upportunity to easily get only the data we need and store it in cash to provide more friendly user experience.

👶 Personalized User Interaction: Users can choose between light and dark mode, this setting is stored in local storage. On load mode is determined be user's system settings.

🤌 The Wild Oasis brings together simplicity and functionality, allowing users to manipulate table-based data with pleasure.

### Here you can see the more full site overview: (see [The Wild Oasis](https://egormity-wild-oasis.vercel.app))

<img src="https://github.com/Egormity/the-wild-oasis/blob/master/assets/Preview-1.jpg?raw=true"/>

###

---

###

<img src="https://github.com/Egormity/the-wild-oasis/blob/master/assets/Preview-2.jpg?raw=true"/>

### _Gratitude to:_

<a target="_blanc" href="https://github.com/jonasschmedtmann">
  <img alt="Static Badge" src="https://img.shields.io/badge/Jonas_Schmedtmann-git-8A2BE2">
</a>

###

###

###

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

###

# Markdown syntax guide

## Headers

# This is a Heading h1

## This is a Heading h2

###### This is a Heading h6

## Emphasis

_This text will be italic_  
_This will also be italic_

**This text will be bold**  
**This will also be bold**

_You **can** combine them_

## Lists

### Unordered

- Item 1
- Item 2
- Item 2a
- Item 2b

### Ordered

1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b

## Images

![This is an alt text.](/image/sample.webp 'This is a sample image.')

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
> > Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns | Right columns |
| ------------ | :-----------: |
| left foo     |   right foo   |
| left bar     |   right bar   |
| left baz     |   right baz   |

## Blocks of code

```
let message = 'Hello world';
alert(message);
```

## Inline code

This web site is using `markedjs/marked`.
