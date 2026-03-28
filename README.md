# DC Profile

A simple web app that closely mimics a Discord user profile card.
This project is fully responsive and supports dynamic configuration for avatars (supports `.gif`), banners (supports animated `.mp4`/`.webm` backgrounds), and social media connections.

## Features

- **Discord-like dark theme styling.**
- **Dynamic Action Button**: The "Message" button triggers a predefined `mailto:` link.
- **FontAwesome Support**: Instantly utilizes FontAwesome Brand icons for any social media connections added.
- **Single Source of Truth config**: Add your unique data in a single easily editable file!

<details>
  <summary>Click to expand for more details</summary>

**Glassmorphism Iframe Mode (WIP)**: If embedded via iframe, the app automatically converts the background into a translucent frost blur for an impressive overlay effect.
</details>
 

## Customization

Simply open `src/config.ts` and modify the properties block.
For example, to add new connections, append them to the `connections` array list. Use standard lowercase brand names in the `type` parameter (like `steam`, `discord`, `soundcloud`, etc.), which hooks into FontAwesome for icon generation automagically!

```ts
export const profileConfig: ProfileData = {
  displayName: "Super keerk",
  email: "contact@email.com",
  connections: [
     { type: "instagram", name: "my_insta", url: "https://instagram.com/my_insta" }
  ],
  ...
};
```

<details>
  <summary>Glassmorphism Iframe Mode (WIP)</summary>
  
**Example of a Transparent Embed (Standard)**
By default, when viewed via an iframe, the design will use the Glassmorphism effect.
```html
<iframe src="https://vermilion10.github.io/dc-profile/" width="500" height="700" allowtransparency="true" style="background: transparent; border: none; border-radius: 12px;"></iframe>
```

**Example of Embedding the Discord Solid Color Theme (Parameter ?glass=false)**
Use this parameter in the *query limit* if you do not want the transparent mode and want the web to strictly use the Discord-style *Dark Gray* color.
```html
<iframe src="https://vermilion10.github.io/dc-profile/?glass=false" width="500" height="700" style="border: none; border-radius: 12px;"></iframe>
```
</details>




## Running the Project

Install dependencies with NPM:
```sh
npm install
```

Start the Vite development server:
```sh
npm run dev
```

Build for static production deployment:
```sh
npm run build
```