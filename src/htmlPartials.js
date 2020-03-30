const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const fs = require('fs');
const path = require('path');

class HtmlPartials extends HTMLAsset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
  }

  parse(code) {
    const basePath = this.name.replace(this.basename, '');
  
    const partialsRegex = /@partial\(["']([a-zA-Z0-9\/\-_.]*)["']\)/g;
    let match;

    while ((match = partialsRegex.exec(code)) !== null) {
      let partial = path.resolve(basePath, match[1]);
      if (fs.existsSync(partial)) { // eslint-disable-line no-sync
        const partialContent = fs.readFileSync(partial, { encoding: 'utf-8' }); // eslint-disable-line no-sync
        const partialRegex = new RegExp(match[0].replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'gi');
        this.contents = this.contents.replace(partialRegex, partialContent);
      }
    }

    return super.parse(this.contents);
  }
}

module.exports = HtmlPartials;
