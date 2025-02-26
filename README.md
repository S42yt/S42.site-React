# S42.site-React

This is my portfolio website built with React. It showcases my projects, social channels, and more.

<p>
<a href="https://vercel.com/?utm_source=discordjs&utm_campaign=oss"><img src="https://raw.githubusercontent.com/discordjs/discord.js/main/.github/powered-by-vercel.svg" alt="Vercel" /></a>   
</p>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

## Features

- **Responsive Design**: Works on all devices.
- **Dark Mode**: Toggle between dark and light modes.
- **Animated Headers**: Dynamic and engaging headers.
- **Project Showcase**: Display your projects with logos and descriptions.
- **Social Links**: Links to your social media channels.
- **Smooth Scrolling**: Smooth transitions and animations.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/S42yt/S42.site-React.git
   cd S42.site-React
   ```

2. Install dependencies using Bun:
   ```sh
   bun install
   ```

## Usage

To start the development server, run:

```sh
bun run dev
```

To build the project for production, run:

```sh
bun run build
```

To preview the production build, run:

```sh
bun run serve
```

# Project Structure

```sh
.github/
  workflow/
    ci.yml
.gitignore
bun.lockb
index.html
LICENSE
package.json
public/
README.md
src/
  assets/
  components/
    footer.tsx
    header.tsx
    readme.tsx
    sidebar.tsx
    socialreadme.tsx
  main.tsx
  styles/
    App.css
    damn.css
    footer.css
    header.css
    NotFound.css
    Portfolio.css
    Projects.css
    readme.css
    sidebar.css
    Socials.css
  views/
    App.tsx
    NotFound.tsx
    Portfolio.tsx
    Projects.tsx
    Socials.tsx
  vite-env.d.ts
tsconfig.json
vite.config.ts
```

## Scripts

- `pretty`: Format the code using Prettier
- `pretty:check`:Check the code formatting using Prettier
- `dev`: Start the developement Server
- `build`: Build the project for production
- `serve`: Preview the production build

## License

This Project is licensed under the MIT License.
See the [LICENSE](License) file for details.
