This is the source of the website https://editorconfig.org/

To update the website, push the master branch

To run in development mode:
``jekyll serve --config _config.yml,_config-dev.yml``

This way google analytics is disabled during testing and the url will be changed to `localhost:4000`.

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
