# Necropolis Nails

This landing page, for a small business, utilizes a JAMstack approach. The intent was to keep hosting costs as low as possible while allowing the business owner to manage the content of the website.

## Credit

The OAuth API functions for this project were sourced from this [Decap CMS / CloudFlare Pages Documentation](https://github.com/i40west/netlify-cms-cloudflare-pages/tree/main).

I flattened the file paths to `/auth` and `/callback`, from `/api/auth` and `/api/callback` respectively since the former paths were not responding during testing.

## Tech Stack

- JS, HTML, CSS
- GitHub, OAuth
- Hugo
- Decap CMS
- CloudFlare Pages

## Purpose & Function

The goal of this project: a lightweight and scalable site with content that could be managed by non-technical individuals but benefits from low to no hosting cost. An alternative to, say, WordPress' bloat and rising hosting costs.

A JAMstack approach was my choice method to achieve this goal since the website's scope was a simple landing page. Nothing crazy. The tech stack was chosen for ease of deployment, compatibility, and because they're all free. Open source was a plus.

Decap CMS, formerly Netlify CMS, is a simple headless content manager that provides a flexible and easy UI for managing the site's contents. OAuth and the aforementioned API authorizes specific collaborators to access the content manager screen. When new changes are made, Decap CMS authenticates to GitHub via OAuth and commits changes to the repo. Repo changes are detected by CloudFlare Pages which uses Hugo to generate a new version of the static files and thereafter automatically deploys.

While the site is only a landing page now, should new pages be necessary, additional configurations with Hugo templating would enable easy creation of new pages, posts, etc. in the CMS without the need to involve more or change technologies.