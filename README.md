# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
your-astro-project/
│
├── public/                    # Public assets accessible to the browser (e.g., favicon, global images)
│   ├── css/                   
│   │   └── style.css          # Any legacy or additional global styles (optional, if needed for compatibility)
│   └── images/                # Image assets used in the project
│
├── src/
│   ├── components/            # All Astro components for modular code
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Slideshow.astro
│   │   ├── OpeningHours.astro
│   │   └── styles/            # Component-specific styles organized here
│   │       ├── header.css
│   │       ├── footer.css
│   │       ├── slideshow.css
│   │       └── openingHours.css
│   │
│   ├── layouts/               # Optional: Layout files for consistent templates
│   │   └── MainLayout.astro   # Main layout (optional, if used for consistent structure)
│   │
│   ├── pages/                 # Main pages of the site
│   │   ├── index.astro        # Main page, imports global styles and components
│   │   └── about.astro        # Additional pages as needed
│   │
│   └── styles/                # Global styles folder
│       └── global.css         # Contains reset, color variables, fonts, etc.
│
└── astro.config.mjs           # Astro project configuration
└── package.json               # Project dependencies and scripts
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
