/*jshint node:true*/
module.exports = {
  description: 'Install Ember Spin Skit dependencies',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('spinkit');
  }
};