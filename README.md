# Vaibhav Rajpoot · Video Editing Portfolio

A Next.js App Router site for Vaibhav's video editing work. The project list is in `app/projects.js`, and local images are in `public/assets/`.

## Run locally

Use Node.js 22 or newer.

```sh
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). Run `npm run build` to generate the production static site in `out/`.

## Deploy on Vercel

1. Push this project's source from the `framecut-portfolio` directory to a GitHub repository.
2. In Vercel, add a project and import the repository. Use the Next.js framework preset and select the directory containing `package.json` as the root.
3. Keep the default build settings and deploy. Vercel can build with `npm run build` and publish the static export.

The site requires no custom environment variables. Vercel's system-provided production domain is used for canonical and social links when available. [Vercel GitHub deployment guide](https://vercel.com/docs/git/vercel-for-github)
