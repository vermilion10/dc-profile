# DC Profile

A simple web app that closely mimics a Discord user profile card.
This project is fully responsive and supports dynamic configuration for avatars (supports `.gif`), banners (supports animated `.mp4`/`.webm` backgrounds), and social media connections.

## Features

- **Discord-like dark theme styling.**
- **Glassmorphism Iframe Mode**: If embedded via iframe, the app automatically converts the background into a translucent iOS-like frost blur for an impressive overlay effect.
- **Dynamic Action Button**: The "Message" button triggers a predefined `mailto:` link.
- **FontAwesome Support**: Instantly utilizes FontAwesome Brand icons for any social media connections added.
- **Single Source of Truth config**: Add your unique data in a single easily editable file!

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
