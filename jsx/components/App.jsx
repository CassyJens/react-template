/**
* @jsx React.DOM
*/

var Router = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function () {
    React.render(
      <div id="main">
        <p>
          Hello World
        </p>
      </div>, document.getElementById('app'));
  }
});

new Router();

Backbone.history.start();
