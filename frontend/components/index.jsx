var React = require('react');
var PropTypes = React.PropTypes;
var Stories = require('./news/index_item');
var NewsUtil = require('../util/news_util');
var ScoreStore = require('../stores/score_store');
var Visualizer = require('./visual_item');

var Index = React.createClass({
	getInitialState: function() {
		return {currentGame: {}}
	},

	// setGame: function(game) {
	// 	this.setState({currentGame: {game} });
	// },

	componentDidMount: function() {
		this.scoreListen = ScoreStore.addListener(this.gameChange);
	},

	gameChange: function() {
		this.setState({currentGame: ScoreStore.currentGame()});
	},

	componentWillUnmount: function() {
		this.scoreListen.remove();
	},

  render: function() {
    return (
      <div className="index-container">
				<Visualizer/>
      </div>
    );
  }

});

module.exports = Index;
