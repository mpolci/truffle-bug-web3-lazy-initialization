angular.module('testApp', [])

angular.module('testApp')
.controller('TestController', function ($log) {
  this.web3initialized = !!(window.web3)
  this.currenteProviderInitialized = !!(window.web3 && web3.currentProvider)
})