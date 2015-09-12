---
layout: post
title: 'Guard Bundler Tutorial - Run "bundle install" Automatically'
date: '2015-08-02 17:50:00 +0200'
---

<img src='/images/2015/08/DTS_Mom1-1x.jpg' srcset='/images/2015/08/DTS_Mom1-1x.jpg 1x, /images/2015/08/DTS_Mom1-2x.jpg 2x' alt='Guard/Bundler Tutorial'>


Following up on my [Guard tutorial](/2015/07/guard-tutorial-run-command-on-file-change), I explain here how setup Guard to run `bundle install` automatically everytime you modify your `Gemfile`.

If you don't know Guard yet, please read my [Guard tutorial](/2015/07/guard-tutorial-run-command-on-file-change) first.


## Motivation

Working with a `Gemfile` can be annoying: edit the file, run `bunde install`, check for error messages, repeat. Or even forget to run `bundle install` and check in copies of `Gemfile` and `Gemfile.lock` that don't match into version control.

With Guard, you can avoid this. Setup like in this tutorial, it will run `bundle install` automatically for you.


## Installation

Guard's support for Bundler comes as a separate gem, the `guard-bundler` gem.

### Install the Gem

To install the `guard-bundler` gem, add it to your `Gemfile`:

<!--more-->

```Ruby
group :development do
  gem 'guard-bundler', require: false
end
```


Your `Gemfile` should now look like this:

```Ruby
source 'https://rubygems.org'

group :development do
  gem 'guard', require: false
  gem 'guard-bundler', require: false
end

[...more gems...]
```


Run `bundle install` to actually download and install the gem:

```bash
$ bundle install
```


### Extend the Guardfile

Now that you have the gem, set it up in your `Guardfile`:

```ruby
guard :bundler do
  watch('Gemfile')
end
```

This section tells Guard to run `bundle install` everytime you modify Gemfile.


## Test it

To test the new guard rule, run Guard:

```bash
$ guard
```

Guard is watching your `Gemfile` now.

Setup your terminal and editor in a way that you can see both at the same time. Save your `Gemfile`. Voilá! You see bundler running `bundle install` for you!


<!-- ## More Advanced Use -->


