# jekyll-mdl
> A Jekyll theme based in Google Material Design Lite library.

## Demo

You can see the online demo here [http://gdgmanagua.github.io/jekyll-mdl/](http://gdgmanagua.github.io/jekyll-mdl/)

![Demo](https://raw.githubusercontent.com/gdg-managua/jekyll-mdl/master/jekyll-mdl-screen.png)

## Sites using jekyll-mdl

If you are using this cool jekyll theme, please open an issue or fork the project, add your site to the list and send us a pull request, we will be happy to know where the theme has been used.

- [prosa100.github.io](http://prosa100.github.io/)
- [fandekasp.github.io](http://fandekasp.github.io/)
- [webiphany.com](http://webiphany.com)
- [siempredelao.github.io](http://siempredelao.github.io/)
- [sparker0i.github.io](http://sparker0i.github.io/)
- [kris27mc.github.io](https://kris27mc.github.io)

## Custom Themes

If you don't want the default site colors, you can create custom themes for the site in the [mdl theme creator](http://www.getmdl.io/customize/index.html). The site will create a custom css, something like this:

     <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.teal-green.min.css" />

Now add this in the _includes/head.html file, under the main css and enjoy your new theme.

## Post Options

All the post, require an image and maybe an author and declare if the post is highlighted or not, the image are used in the cards and the autor used for the footer in the cards, the highlighted post is used for make this 12 cols and not a card, if you want to use the custom images and set the author and the highlight post, just add a new key in the post config, something like this:

    ---
    layout: post
    title:  "Welcome to jekyll-mdl"
    date:   2015-07-11 11:34:20
    categories: jekyll
    highlight: true
    image: http://www.wchs4pets.org/wp-content/uploads/2015/03/cat_1-jpg.jpg
    author: Google Developers Group Managua
    ---

## Layout Configuration
You can setup 4 types of layout

- Fixed Nav + Simple Card Grid
- Fixed Nav + Highlight Post + Card Grid
- Drawer Nav + Simple Card Grid
- Drawer Nav + Highlight Post + Card Grid

For use this in the [_config.yml](https://github.com/gdg-managua/jekyll-mdl/blob/master/_config.yml) select the type of layout, rebuild the website and voilà :smile:

## Contributing
If you want to contribute to this project, please read the [CONTRIBUTING](https://github.com/gdg-managua/jekyll-mdl/blob/master/CONTRIBUTING.md) file and perform the following steps

    # Fork this repository
    # Clone your fork
    jekyll serve --watch

    git checkout -b feature_branch
    # Implement your feature and tests
    git add . && git commit
    git push -u origin feature_branch
    # Send a pull request for your feature branch

## Team
[![Oscar Cortez](https://avatars.githubusercontent.com/u/2553459?v=3&s=100)](http://github.com/oscarmcm) | [![Byron Corrales](https://avatars.githubusercontent.com/u/99616?v=3&s=100)](https://github.com/byroncorrales)
---|---
[Oscar Cortez](http://github.com/oscarmcm) | [Byron Corrales](https://github.com/byroncorrales)
Project Lead | Contributor

## License
Licensed under the Apache 2.0 license.

See the [LICENSE](https://github.com/gdg-managua/jekyll-mdl/blob/master/LICENSE.md) file for more details.

Copyright © 2015 [Google Developers Group Managua](http://www.gdgmanagua.org).


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/gdg-managua/jekyll-mdl/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

