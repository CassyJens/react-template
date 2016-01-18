/** 
 * A template for a component that is not updated by the React DOM diff
 */
 
var SelfUpdatingComponent = React.createClass({

  render: function() {
    return (
      <div id="self-updating-div"></div>
    );
  },

  componentDidMount: function () {
    // instantiate and render charts
    this.renderComponent(this.props);
  },

  shouldComponentUpdate: function (props) {
    // call renderComponent here and return false
    return false;
  },

  renderComponent: function (props) {
    // use a library, component, script to update the DOM
  }

});

module.exports = SelfUpdatingComponent;
