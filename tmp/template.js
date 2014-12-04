(function(module) {
try {
  module = angular.module('bitonic');
} catch (e) {
  module = angular.module('bitonic', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('main/main.html',
    '<header class="hero-unit" id="banner">\n' +
    '  <div class="container">\n' +
    '    <h1>\'Allo, \'Allo!</h1>\n' +
    '    <p class="lead">Kick-start your next web app with Angular Fullstack</p>\n' +
    '    <img src="assets/images/yeoman.png" alt="I\'m Yeoman">\n' +
    '  </div>\n' +
    '</header>');
}]);
})();
