/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-spin-kit',
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import(app.bowerDirectory + '/spinkit/css/spinkit.css');
  }
};
