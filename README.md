# Qwik City App ⚡️

- [Qwik Docs](https://qwik.dev/)
- [Discord](https://qwik.dev/chat)
- [Qwik GitHub](https://github.com/QwikDev/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.dev/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.dev/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `pnpm qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```shell
pnpm qwik add # or `pnpm qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `pnpm start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
pnpm preview # or `pnpm preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
pnpm build # or `pnpm build`
```

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. The deployment is handled by a GitHub Actions workflow.

### How it works

1. When you push changes to the main branch, the GitHub Actions workflow is triggered
2. The workflow installs the static adapter and configures it with the correct GitHub Pages URL
3. It builds the Qwik site with the static adapter, ensuring proper base path configuration
4. The built site is then deployed to GitHub Pages

### Path Configuration

The GitHub Actions workflow automatically:
- Sets the correct origin URL in the static adapter configuration using GitHub environment variables
- Prevents path duplication by configuring the base path correctly
- Ensures the site is accessible at `https://[username].github.io/[repository-name]/`

### Setup Requirements

To enable GitHub Pages deployment:

1. Go to your repository settings on GitHub
2. Navigate to the "Pages" section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The first workflow run will create the GitHub Pages site

### Manual Deployment

You can manually trigger a deployment by:

1. Going to the "Actions" tab in your GitHub repository
2. Selecting the "Deploy to GitHub Pages" workflow
3. Clicking "Run workflow" and selecting the branch you want to deploy

### Local Testing

To test the GitHub Pages build locally:

```shell
# Install the static adapter if not already installed
pnpm qwik add static

# Update the static adapter configuration
# Edit adapters/static/vite.config.ts and set the origin to your local URL

# Build the site
pnpm build

# Preview the built site
pnpm preview
```

## Static Site Generator (Node.js)

```shell
pnpm build.server
```
