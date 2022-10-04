# parcel-transformer-html-partials

A transformer for the [Parcel bundler](https://parceljs.org/) that enables you to use html partials

[![npm version](https://badge.fury.io/js/parcel-transformer-html-partials.svg)](https://badge.fury.io/js/parcel-transformer-html-partials)
[![npm package](https://img.shields.io/npm/dm/parcel-transformer-html-partials.svg)](https://www.npmjs.com/package/parcel-transformer-html-partials)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Install

```bash
npm install --save-dev parcel-transformer-html-partials
```

## Config

Add a .parcelrc file with the following config:
```
{
  "extends": ["@parcel/config-default"],
  "transformers": {
    "*.html": ["parcel-transformer-html-partials"]
  }
}
```

## Usage

You can use html partials in your regular html files by using the following syntax:

`@partial("someHtmlPartial.html")`

The path should be relative to the file at hand. Check out the example project.

## Release Notes
 - 1.0.0

# Parcel 1 plugin
For parcel 1 this plugin was called: parcel-plugin-html-partials

## Install

```bash
npm install --save-dev parcel-plugin-html-partials
```

## Usage

You can use html partials in your regular html files by using the following syntax:

`@partial("someHtmlPartial.html")`

The path should be relative to the file at hand. Check out the example project.

## v1 release notes
 - 0.0.6 Allow numbers in partial file names (thanks to BernhardBehrendt)
 - 0.0.5 Released new version with reduced filesize
 - 0.0.4 Fix for partials in subfolders and added example project
 - 0.0.3 Changed docs with regards to path
 - 0.0.2 Added github url
 - 0.0.1 First version

