
# Installation

## Install Rouge

```
$ gem install rouge
```


## Get the unreleased version of Jekyll

Support for extensionless permalink is currently unreleased.
In order to use this feature, install the latest development version of Jekyll.

See http://jekyllrb.com/docs/installation/#pre-releases



## Make a Vhost in Nginx


## Add support for extensionless permalinks

See http://jekyllrb.com/docs/permalinks/


```
try_files $uri $uri.html $uri/ =404;
```


## Making Extensionless Pages

1. Make a new toplevel file mypage.md
2. In the frontmatter, **add a permalink** for the page!
3. The permalink **must** have a trailing slash!


## Page Order

Add an `order` attribute to the page's frontmatter.

See http://stackoverflow.com/a/25513956


## Markdown Preview

To preview markdown pages, use the Atom editor.
Control-Shift-M toggles Markdown preview.

## Some bogus text


