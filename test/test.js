var a = require('../helpers');
var c = require('../config');
var b = require('../screens');
describe('AndroidTest', () => {
  const wdio = require('webdriverio');
  const client = wdio.remote(c.opts);

  it('allows user to access the app', () => {
    client
      .init()
      .click(a.resourceId(b.fabBtn()))
      .click(a.classname(b.toolbar()))
      .click(a.textName(b.settings()))
      .end();
  });
});
