# angular-adaptive-youtube v0.1.0 [![Build Status](https://travis-ci.org/angular-adaptive/adaptive-youtube.png?branch=master)](https://travis-ci.org/angular-adaptive/adaptive-youtube)

Save data, conditionally load youtube videos.

### Demo

Check out http://angular-adaptive.github.io/adaptive-youtube/demo/

# Requirements

- AngularJS v ~1.2.x

# Usage

We use [bower](http://twitter.github.com/bower/) for dependency management. Add

```json
dependencies: {
    "angular-adaptive-youtube": "latest"
}
```

To your `bower.json` file. Then run

    bower install

This will copy the youtube module files into your `bower_components` folder, along with its dependencies. Load the script files in your application:

```html
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/angular-adaptive-youtube/angular-adaptive-youtube.min.js"></script>
```

Add the adaptive.youtube module as a dependency to your application module:

```js
var myAppModule = angular.module('MyApp', ['adaptive.youtube']);
```

Set up styles and a video id
```css
.youtube { width: 100%; height: 500px; } 
```
```js
$scope.youtubeId = 'kxopViU98Xo'; 
```

And use it
```html
<youtube video="youtubeId" class="youtube"></youtube>
```

# Contributing

Pull requests are welcome. 

Make a PR against canary branch and don't bump any versions. 

Please respect the code style in place.

# License

The MIT License

Copyright (c) 2014 [Jan Antala](http://www.janantala.com)
