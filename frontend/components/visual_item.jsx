var React = require('react');
var ScoreStore = require('../stores/score_store');


var VisualItem = React.createClass({
	getInitialState: function() {
		return { currentGame: {}, active: false }
	},

	componentDidMount: function() {
		this.scoreListen = ScoreStore.addListener(this.scoreChange);
	},

	scoreChange: function() {
		this.setState({currentGame: ScoreStore.currentGame()});
		this.setState({ active: true });
	},

	componentWillUnmount: function() {
		this.scoreListen.remove();
		this.setState({ active: false })
	},

	// test: function() {
	// 	console.log('working');
	// },

	// setGame: function(score) {
	// 	this.setState({currentGame: score});
	// 	this.setState({ active: true });
	// },

	render: function() {

		if (this.state.active) {
			var pitcher = this.state.currentGame.pitcher.last;
			var era = this.state.currentGame.pitcher.era;

			return (
				<div id="visualizer_container">
					{pitcher}, {era}
				</div>
				);
		} else {
			return (<div>working</div>)
		}
	}

});


module.exports = VisualItem;