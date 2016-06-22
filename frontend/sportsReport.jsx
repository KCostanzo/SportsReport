var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('react-router').hashHistory;

var MainDisplay = require('./components/index');


var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path ='/' component={App}>
    <IndexRoute component={MainDisplay} />
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
      document.getElementById('root')
  );
});
