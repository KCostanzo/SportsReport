var React = require('react');
var PropTypes = React.PropTypes;

var ScoreStore = require('../../stores/score_store');
var ScoreItem = require('./score_item');

var TempUtil = require('../../util/score_util.js');

var Scores = React.createClass({
  getInitialState: function() {
    return { scores: [] };
  },

  componentDidMount: function() {
    this.scoreListener = ScoreStore.addListener(this.scoreChange);
    //call API to fill store
    TempUtil.fetchAllScores();
  },

  scoreChange: function() {
    this.setState({scores: ScoreStore.all()});
    // debugger;
  },

  componentWillUnmount: function() {
    this.scoreListener.remove();
  },

  render: function() {
    var scores = this.state.scores.map(function(score) {
      return <ScoreItem score={score} key={score.id} />;
    });
    // debugger;
    return (
      <div className="scores-container">
        <ul>
          {scores}
        </ul>
      </div>
    );
  }

});

module.exports = Scores;
