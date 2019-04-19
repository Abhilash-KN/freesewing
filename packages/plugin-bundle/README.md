> **Note**: This is part of version 2 of FreeSewing.  
> It is a work in progress, and not ready for prime-time yet
> 
> For all questions, please come say hellp in [our chatroom on Gitter](https://gitter.im/).

<p align="center"><a title="Go to freesewing.org" href="https://freesewing.org/"><img src="https://freesewing.org/img/logo/black.svg" align="center" width="150px" alt="Freesewing logo"/></a></p>
<p>FreeSewing is a free and open source library for made-to-measure sewing patterns</p>
<p align="center"><a href="https://gitter.im/freesewing/freesewing" title="Chat with us on Gitter"><img src="https://badgen.net/badge/Gitter/Chat%20with%20us/CA0547?icon=gitter" alt="Chat with us on Gitter"/></a><a href="https://twitter.com/freesewing_org" title="Follow @freesewing_org on Twitter"><img src="https://badgen.net/badge/Twitter/@freesewing_org/1DA1F2?icon=twitter" alt="Follow @freesewing_org on Twitter"/></a><a href="https://github.com/freesewing" title="FreeSewing on GitHub"><img src="https://badgen.net/badge/GitHub/freesewing/269F42?icon=github" alt="FreeSewing on GitHub"/></a><a href="https://freesewing.org/patrons/join" title="Become a FreeSewing Patron"><img src="https://badgen.net/badge/Become%20a/Patron/purple" alt="Become a FreeSewing Patron"/></a><a href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://badgen.net/badge/License/MIT/blue" alt="License: MIT"/></a><a href="https://freesewing.org/patrons/join" title="Become a FreeSewing Patron"><img src="https://badgen.net/badge/Become%20a/Patron/purple" alt="Become a FreeSewing Patron"/></a><a href="https://freesewing.org/" title="FreeSewing.org"><img src="https://badgen.net/badge/FreeSewing/.org/3DA639" alt="FreeSewing.org"/></a><a href="https://freesewing.dev/" title="FreeSewing.dev"><img src="https://badgen.net/badge/FreeSewing/.dev/3DA639" alt="FreeSewing.dev"/></a></p>

# @freesewing&#x2F;plugin-bundle

An umbrella package of 8 essential FreeSewing build-time plugins

<p align="center">
  <a title="Go to freesewing.org" href="https://freesewing.org/"><img src="https://freesewing.org/img/logo/black.svg" align="center" width="150px" alt="Freesewing logo"/></a>
</p>
<h4 align="center"><em>&nbsp;<a title="Go to freesewing.org" href="https://freesewing.org/">freesewing</a></em>
<br><sup>a library for made-to-measure sewing patterns</sup>
</h4>
<p align="center">
  <a href="https://travis-ci.org/freesewing/plugin-bundle"><img src="https://badgen.net/travis/freesewing/plugin-bundle/master" alt="Travis build"></a>
  <a href="https://www.npmjs.com/package/@freesewing/plugin-bundle"><img src="https://badgen.net/npm/v/@freesewing/plugin-bundle" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@freesewing/plugin-bundle"><img src="https://badgen.net/npm/license/@freesewing/plugin-bundle" alt="License"></a>
  <a href="https://codecov.io/gh/freesewing/plugin-bundle"><img src="https://badgen.net/codecov/c/github/freesewing/plugin-bundle/master" alt="Code coverage"></a>
  <a href="https://deepscan.io/dashboard#view=project&pid=3253&bid=27563"><img src="https://deepscan.io/api/projects/3253/branches/27563/badge/grade.svg" alt="DeepScan grade"></a>
  <a href="https://gitter.im/freesewing/freesewing"><img src="https://badgen.net/badge/chat/on%20Gitter/cyan" alt="Chat on Gitter"></a>
  <a href="https://freesewing.org/patrons/join"><img src="https://badgen.net/badge/become/a%20Patron/FF5B77" alt="Become a Patron"></a>
</p>

# plugin-bundle

A freesewing plugin that provides the following plugins in one bundle:


 1)  [plugin-cutonfold](https://github.com/freesewing/plugin-cutonfold) : Add cut-on-fold indicators to your patterns 
 2)  [plugin-dimension](https://github.com/freesewing/plugin-dimension) : Add dimensions to your (paperless) patterns 
 3)  [plugin-grainline](https://github.com/freesewing/plugin-grainline) : Add grainline indicators to your patterns 
 4)  [plugin-logo](https://github.com/freesewing/plugin-logo) : Add a scalebox to your patterns
 5)  [plugin-scalebox](https://github.com/freesewing/plugin-scalebox) : Add pretty titles to your pattern parts 
 6)  [plugin-title](https://github.com/freesewing/plugin-title) : Add pretty titles to your pattern parts 
 7)  [plugin-round](https://github.com/freesewing/plugin-title) : Rounds corners
 8)  [plugin-sprinkle](https://github.com/freesewing/plugin-sprinkle) : Add multiple snippets to your pattern

Note that these are all **build-time plugins**. In other words, plugins used by developers/pattern designers,
rather than run-time plugins that are used when generating patterns.

Without exception, all freesewing patterns use all these plugins, so it made sense to bundle them.

## Usage

To load this plugin, add it to your instantiated pattern.

On node.js:

```js
import freesewing from 'freesewing'
import pluginBundle from '@freesewing/plugin-bundle'

let pattern = new freesewing.Pattern()
  .with(pluginBundle);
```

In the browser, this plugin will register as `freesewing.plugins.bundle`:

```html
<script type="text/javascript" src="https://unpkg.com/freesewing"></script>
<script type="text/javascript" src="https://unpkg.com/@freesewing/plugin-bundle"></script>

<script>
var pattern = new freesewing.Pattern()
  .with(freesewing.plugins.bundle);
</script>
```

## Install

To install, run:

```sh
npm install @freesewing/plugin-bundle
```

## Build

To build this plugin, run:

```sh
npm run build
```


## About FreeSewing

Where the world of makers and developers collide, that's where you'll find FreeSewing.

Our [core library](https://freesewing.dev/en/freesewing) is a *batteries-included* toolbox
for parametric design of sewing patterns. It's a modular system (check our list
of [plugins](https://freesewing.dev/en/plugins) and getting started is as simple as:

```bash
npm init freesewing-pattern
```

The [getting started] section on [freesewing.dev](https://freesewing.dev/) is a good
entrypoint to our documentation, but you'll find a lot more there, including
our [API documentation](https://freesewing.dev/en/freesewing/api),
as well as [examples](https://freesewing.dev/en/freesewing/examples),
and [best practices](https://freesewing.dev/en/do).

If you're a maker, checkout [freesewing.org](https://freesewing/) where you can generate
our sewing patterns adapted to your measurements.

## ♥️ Support FreeSewing: Become a patron ♥️

FreeSewing is an open source project run by a community, 
and financially supported by our patrons.

If you feel what we do is worthwhile, you too 
should [become a patron](https://freesewing.org/patrons/join).

## Links

 - 💻 Makers website: [freesewing.org](https://freesewing.org)
 - 💻 Developers website: [freesewing.dev](https://freesewing.org)
 - 💬 Chat: [gitter.im/freesewing](https://gitter.im/freesewing/freesewing)
 - 🐦 Twitter: [@freesewing_org](https://twitter.com/freesewing_org)
 - 📷 Instagram: [@freesewing_org](https://instagram.com/freesewing_org)
