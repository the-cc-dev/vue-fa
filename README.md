# Vue FA

Simply utility to convert [FontAwesome](https://fontawesome.com/) svg files into single Vue component js files.

[https://fontawesome.com](https://fontawesome.com/)

**Note:** This is still kind of a test. Please feel free to contribute any updates to the css or structure of the template.


## Usage

~~~
> npm install @websanova/vue-fa
~~~

Make sure to include the css file.

~~~
@import './node_modules/@websanova/vue-fa/css/style.css'
~~~

Include the icons you need.

~~~
Vue.component('ico-user', require('@websanova/vue-fa/js/user.js'));
Vue.component('ico-spinner', require('@websanova/vue-fa/js/spinner.js'));
~~~


## Class Options

~~~
<ico-spinner class="lg x2 x3 x4 x5 fw spin" />
~~~


## Examples

Combine any of the options just like with FontAwesome.

~~~
<ico-user class="lg" />
<ico-lock class="x2 fw" />
<ico-spinner class="spin" />
~~~


Or just apply your own classes.

~~~
<ico-facebook class="text-facebook" />
~~~


## Updating Files

1. Dump any svg files to convert into the svg folder.
2. Run `npm run build`.
3. Commit and push.


## License

This is just a simple little Vue wrapper utility for the [FontAwesome](https://fontawesome.com/) svg files.

I in know way own these files. If you have licensing issues check with [FontAwesome](https://fontawesome.com/).

[FontAwesome License](https://fontawesome.com/license)