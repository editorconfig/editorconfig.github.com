# EditorConfig website

This is the source of the website https://editorconfig.org/

The EditorConfig website are static HTML pages that are generated with [Jekyll](https://jekyllrb.com/) and it is hosted on [GitHub Pages](https://pages.github.com/). Every `git push` to the `master` branch automatically updates the website.

## Local development

For local development make sure Ruby and Jekyll are installed as described in the [Jekyll docs](https://jekyllrb.com/docs/installation/).

[Jekyll Environments](https://jekyllrb.com/docs/configuration/environments/) are used to distinguish between development and production. In the production environment Google Analytics is enabled.

To run the development environment simply use:

```bash
jekyll serve
```

To run the production environment locally use:
```bash
JEKYLL_ENV=production jekyll serve
```

GitHub Pages automatically build and runs the site in the production environment.

## Blog

To add posts to the blog, add a page in the `_posts` subdir as described in [Jekyll docs](https://jekyllrb.com/docs/posts/). Create a [pull request](https://github.com/editorconfig/editorconfig.github.com/pulls) to get your post included on the website.

You can use both markdown and html styled text, but for blog posts markdown is preferred.

**Required Front Matter fields that need to be used for every blog posts:**

``` yaml
---
layout: post
title: "My awesome new blog post"
---
```

`layout` must always be set to `post` to ensure all posts looks the same.

`title` is obviously the title of your blog post. It is added to blog post automatically, so you don't need to add it to the text yourself again.

**Useful optional Front Matter fields that can be used for blog posts:**

``` yaml
---
date: 2016-04-28 14:43:54 +0200
author: "Your Name"
---
```

Use `date` to add a specific time to a post. Otherwise "00:00:00" will be used.

If you don't use `author`, `EditorConfig Team` will be used in the RSS feed and page header.

## License

The EditorConfig website is licensed under a [Creative Commons Attribution 3.0 Unported License][].

[Creative Commons Attribution 3.0 Unported License]: http://creativecommons.org/licenses/by/3.0/
