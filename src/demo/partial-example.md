---
# Only specifying the redirect_url:
redirect_url: https://github.com/oleeskild/gurl
# All other values will use defaults:
# - layout: redirect.njk (from markdown.js defaults)
# - redirect_delay: 3000 (from markdown.js defaults)
# - title: derived from redirect_url
---

This is an example page that demonstrates partially overriding default redirect values.

Only the redirect_url was specified in the frontmatter, so this page:

- Redirects to https://github.com/oleeskild/gurl
- Waits 3 seconds before redirecting (default)
- Uses the redirect URL as the page title (default)
- Uses the redirect.njk layout (default)
