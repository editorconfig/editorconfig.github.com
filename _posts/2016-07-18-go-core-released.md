---
layout: post
title: "Editorconfig meets Go"
date: 2016-07-18 12:30:00 -0300
---

Editorconfig now has a core written in Go. Now you can parse and create
editorconfig files using Golang. It also comes with some funcionality that
may be useful for someone that may eventually write a editor plugin using it.

<img src="{{site.baseurl}}/go-editorconfig.png" />

To get started, install it with the command below and see the
[source and documentation][github]. We recommend the use of
[gopkg][gopkg] import path for stability.

```
go get -v -u gopkg.in/editorconfig/editorconfig-core-go.v1
```

Please file any bug or feature request in the [issue tracker][issuetracker].
Contributions are also welcome.

[gopkg]: http://gopkg.in/editorconfig/editorconfig-core-go.v1
[github]: https://github.com/editorconfig/editorconfig-core-go
[issuetracker]: https://github.com/editorconfig/editorconfig-core-go/issues 
