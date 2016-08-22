var React = require('react');
var ScoreStore = require('../stores/score_store');


var VisualItem = React.createClass({
	getInitialState: function() {
		return { currentGame: null, active: false };
	},

	componentDidMount: function() {
		this.scoreListen = ScoreStore.addListener(this.scoreChange);
	},

	scoreChange: function() {
		this.setState({currentGame: ScoreStore.currentGame()});
		// if (this.state.currentGame && this.state.currentGame.status.status !== "Preview") {
			// console.log(this.state.currentGame);
			this.setState({ active: true });
		// }
	},

	componentWillUnmount: function() {
		this.scoreListen.remove();
		this.setState({ active: false });
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
			var pitcher = this.state.currentGame.pitcher.last + ', ' + this.state.currentGame.pitcher.first;
			var era = this.state.currentGame.pitcher.era;
			var batter = this.state.currentGame.batter.last + ', ' + this.state.currentGame.batter.first;
			var batter_stats = this.state.currentGame.batter.avg + ' ' + this.state.currentGame.batter.pos;

			var inningArray = [
				<li>
					<div className="inning-score empty">

					</div>
					<div className="inning-score team-abbrev">
						{this.state.currentGame.home_name_abbrev}
					</div>
					<div className="inning-score team-abbrev">
						{this.state.currentGame.away_name_abbrev}
					</div>
				</li>
			];
			var inning_num = 1;

			this.state.currentGame.linescore.inning.forEach(function (inning) {
				var home = inning.home;
				var away = inning.away;

				inningArray.push(<li>
					<div className="inning-score">
						{inning_num}
					</div>
					<div className="inning-score">
						{home}
					</div>
					<div className="inning-score">
						{away}
					</div>
				</li>);
				inning_num += 1;
			});

			while (inningArray.length < 11) {
				if (inning_num === 10) {
					inning_num = '';
				}
				inningArray.push(<li>
					<div className="inning-score">{inning_num}</div>
					<div className="inning-score"></div>
					<div className="inning-score"></div>
				</li>);
				inning_num += 1;
			}
			var awayHits = this.state.currentGame.linescore.h.away;
			var homeHits = this.state.currentGame.linescore.h.home;
			var homeErrors = this.state.currentGame.linescore.e.home;
			var awayErrors = this.state.currentGame.linescore.e.away;
			var homeTeam = this.state.currentGame.home_team_name;
			var awayTeam = this.state.currentGame.away_team_name;
			var homeScore = this.state.currentGame.linescore.r.home;
			var awayScore = this.state.currentGame.linescore.r.away;

			inningArray.push(<li>
				<div className="inning-score">H</div>
				<div className="inning-score">{homeHits}</div>
				<div className="inning-score">{awayHits}</div>
			</li>);

			inningArray.push(<li>
				<div className="inning-score">E</div>
				<div className="inning-score">{homeErrors}</div>
				<div className="inning-score">{awayErrors}</div>
			</li>);

			return (
				<div id="visualizer_container">
					<div id='score-container'>
						<div id='home-score'> <div>{homeTeam}</div>  <div>{homeScore}</div></div>
						
						<div id='away-score'><div>{awayTeam}</div>  <div>{awayScore}</div></div>
					</div>

					<ul id="linescore">
						{inningArray}
					</ul>
					<div id="pitcher">
						On the Mound <div>{pitcher}</div> <div id='era'>{era}</div>
					</div>

					<div id="batter">
						{batter}, {batter_stats}
					</div>
				</div>
				);
		} else {
			return (<div>working</div>);
		}
	}

});


module.exports = VisualItem;
