---
layout: base.njk
title: Quick Guide
description: Add your own custom shortcuts with simple markdown files. Quick, easy, and backed by Git version control.
---

# Quick Guide: Adding Redirects with GitHub.dev

Managing your URL shortcuts with Gurl is easy, especially if you use GitHub.dev to edit your repository directly in the browser.

## Step-by-Step Instructions

1. **Open GitHub.dev:**

   - Navigate to your Gurl repository on GitHub
   - Press the `.` (period) key to open GitHub.dev editor right in your browser
   - No need to clone the repository locally!

2. **Create a New Redirect:**

   - Navigate to the `src` directory
   - Create a new folder if needed (e.g., `blogs`, `docs`, etc.)
   - Create a new markdown file with a `.md` extension
   - The file path will become the URL path (e.g., `src/social/twitter.md` becomes `/social/twitter`)

3. **Add the Required Frontmatter:**

   ```markdown
   ---
   layout: redirect.njk
   title: Your Page Title
   redirect_url: https://destination-url.com
   redirect_delay: 3000 # milliseconds (3 seconds)
   ---

   Optional content to display on the redirect page
   ```

4. **Commit Your Changes:**

   - Use the Source Control tab in GitHub.dev
   - Write a commit message
   - Commit and push directly from the browser

5. **Your Redirect is Live!**
   - The deployment will automatically update with your new redirect
   - No need to run any additional commands

## Tips for Effective URL Management

- **Use Meaningful File Paths**: Create a logical folder structure for your redirects
- **Include Descriptive Content**: Add helpful information in the markdown body
- **Control Redirect Timing**: Adjust the `redirect_delay` for different types of links
- **Bulk Edit**: You can create multiple redirects in a single commit
