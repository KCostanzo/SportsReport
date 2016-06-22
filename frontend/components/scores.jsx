var React = require('react');
var PropTypes = React.PropTypes;

var ScoreStore = require('../stores/score_store');

var Scores = React.createClass({
  getInitialState: function() {
    return { scores: [] };
  },

  componentDidMount: function() {
    // this.scoreListener = ScoreStore.addListener(this.scoreChange);
    //call API to fill store
  },

  scoreChange: function() {
    // this.setState({scores: ScoreStore.all()});
  },

  componentWillUnmount: function() {
    this.scoreListener.remove();
  },

  render: function() {
    return (
      <div />
    );
  }

});

module.exports = Scores;
