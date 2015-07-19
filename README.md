# jekyll-mdl
> A Jekyll theme based in Google Material Design Lite library.

## Post Configs

All the post, require an image and maybe an author, the image are used in the cards and the autor used for the footer in the cards. For use the images and author, just add a new key in the post config, something like this:

    ---
    layout: post
    title:  "Welcome to jekyll-mdl"
    date:   2015-07-11 11:34:20
    categories: jekyll
    image: http://www.wchs4pets.org/wp-content/uploads/2015/03/cat_1-jpg.jpg
    author: Google Developers Group Managua
    ---

## Layout Configs
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

## License
Licensed under the Apache 2.0 license.

See the [LICENSE](https://github.com/gdg-managua/jekyll-mdl/blob/master/LICENSE.md) file for more details.

Copyright © 2015 [Google Developers Group Managua](http://www.gdgmanagua.org).
