const Transformer = require('@parcel/plugin').Transformer;
const fs = require('fs');
const path = require('path');

module.exports = new Transformer({
  async transform(props) {
    const { asset, options } = props;

    let code = await asset.getCode();
    const originalCode = code;

    const partialsRegex = /@partial\(["']([a-zA-Z0-9\/\-_.]*)["']\)/g;
    let match;

    const includes = [];

    while ((match = partialsRegex.exec(code)) !== null) {
      let partial = path.resolve(options.projectRoot, match[1]);
      includes.push(partial);
      if (fs.existsSync(partial)) { // eslint-disable-line no-sync
        const partialContent = fs.readFileSync(partial, { encoding: 'utf-8' }); // eslint-disable-line no-sync
        const partialRegex = new RegExp(match[0].replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'gi');
        code = code.replace(partialRegex, partialContent);
      }
    }

    if (code !== originalCode) {
      asset.setCode(code);
      for (let include of includes) {
        asset.invalidateOnFileChange(include);
      }
    }

    return [asset];
  }
});
