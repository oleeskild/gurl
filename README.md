# Gurl

A git backed URL shortener built with Eleventy (11ty) that uses markdown files for redirects.

## Deploy Your Own

Click one of the buttons below to deploy your own instance of Gurl:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/oleeskild/gurl)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/oleeskild/gurl)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/oleeskild/gurl)

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/oleeskild/gurl)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## How It Works

This URL shortener uses markdown files to create redirects, with Git providing version control. The file path becomes the URL slug.

### Creating a Redirect

1. Create a markdown file at the desired path, for example `src/books/mobydick.md`
2. Add the following frontmatter to configure the redirect:

```markdown
---
layout: redirect.njk
title: Your Page Title
redirect_url: https://destination-url.com
redirect_delay: 5000 # Delay in milliseconds before redirecting
---

Optional content to display on the redirect page
```

- The `redirect_url` is the destination URL
- `redirect_delay` controls how many milliseconds to wait before redirecting (default is 0)
- Any content in the markdown body will be displayed on the redirect page

### Examples

- `/books/mobydick` redirects to Moby Dick on Project Gutenberg
- `/articles/tech/eleventy` redirects to the Eleventy documentation

## Manage Redirects with GitHub.dev

You can easily add or edit redirects directly from your browser using GitHub.dev:

1. Press `.` (period key) while viewing your repository on GitHub to open GitHub.dev editor
2. Navigate to the `src` directory to manage existing redirects
3. Create new folders and `.md` files for new redirects
4. Commit and push your changes directly from the browser

This makes it extremely easy to manage your URL shortcuts without needing to clone the repository locally.

## Project Structure

- `src/`: Source files
  - `_includes/`: Layout templates including the redirect template
  - `_data/`: Global data files
  - `css/`: Stylesheets
  - Various redirect markdown files organized in folders
- `.eleventy.js`: Eleventy configuration
- `_site/`: Generated site (after building)

## Deployment Configuration

### Netlify

Create a `netlify.toml` file with the following contents:

```toml
[build]
  command = "npm run build"
  publish = "_site"
```

### Vercel

Create a `vercel.json` file with the following contents:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "_site",
  "devCommand": "npm run dev"
}
```

### GitHub Pages

You can use GitHub Actions to deploy to GitHub Pages. Create a `.github/workflows/deploy.yml` file with appropriate configuration.
