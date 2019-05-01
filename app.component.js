angular.
module('App').
component('greetUser', {
      template: 'Hello, {{ctrl.hello}}!',
      controller: function GreetUserController() {
            alert('hello robert');
            this.hello = "Hello World Mr. Robert!";
          }
});