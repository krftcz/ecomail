# Ecomail Front-End developer task (Vue)

## Task assignment
Your task will be to prepare simple landing page based on designer's prototype. Goal is to show off your ability to work with responsive design, fetch the data from API endpoint and render them on the page. We will mainly focus on your code style, atomic approach for writing components and respect for designer's demands at the same time.

Provided data from https://fakestoreapi.com/products consists of objects with some key-value pairs about clothes, jewelry, etc. Your job is to render and sort these products based on their rating and give them appropriate image by their category. You can download these images here in Figma.

Additional info is provided within this file at certain points.

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

First copy app/.env-local as app/.env

Then make sure to install the dependencies:

```bash
cd app # for all following commands always be in app folder
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

If using SSR, build the application for production:

```bash
pnpm build:production
```

If not using SSR but SSG, use:

```bash
pnpm generate:production
```

Both generate and build commands can also be used with :test instead of :production for testing environment.
Test environment should have password protection defined in .env-test file.

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
