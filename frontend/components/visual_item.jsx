var React = require('react');
var ScoreStore = require('../stores/score_store');
var Images = require('../constants/images');


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

		if ((this.state.active) && (this.state.currentGame.status.status === "In Progress")) {
			var pitcher = this.state.currentGame.pitcher.last + ', ' + this.state.currentGame.pitcher.first;
			var era = this.state.currentGame.pitcher.era;
			var batter = this.state.currentGame.batter.last + ', ' + this.state.currentGame.batter.first + ' ' + this.state.currentGame.batter.pos;
			var batter_ingame_stats = this.state.currentGame.batter.h + '-' + this.state.currentGame.batter.ab;
			var batter_stats = this.state.currentGame.batter.avg + ', hr\'s:' + this.state.currentGame.batter.hr + ', rbi\'s:' + this.state.currentGame.batter.rbi;

			var inningArray = [
				<li>
					<div className="inning-score empty">

					</div>
					<div className="inning-score team-abbrev">
						{this.state.currentGame.away_name_abbrev}
					</div>
					<div className="inning-score team-abbrev">
						{this.state.currentGame.home_name_abbrev}
					</div>
				</li>
			];

			var inning_num = 1;

			if (this.state.currentGame.linescore.inning.length > 0){
				this.state.currentGame.linescore.inning.forEach(function (inning) {
						var home = inning.home;
						var away = inning.away;

						inningArray.push(<li>
							<div className="inning-score">
								{inning_num}
							</div>
							<div className="inning-score">
								{away}
							</div>
							<div className="inning-score">
								{home}
							</div>
						</li>);
						inning_num += 1;
				});
			}

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
			var a_logo = this.state.currentGame.away_name_abbrev;
			var h_logo = this.state.currentGame.home_name_abbrev;
			var home_record = this.state.currentGame.home_win + '-' + this.state.currentGame.home_loss;
			var away_record = this.state.currentGame.away_win + '-' + this.state.currentGame.away_loss;
			
			inningArray.push(<li>
				<div className="inning-score">H</div>
				<div className="inning-score">{awayHits}</div>
				<div className="inning-score">{homeHits}</div>
			</li>);

			inningArray.push(<li>
				<div className="inning-score">E</div>
				<div className="inning-score">{awayErrors}</div>
				<div className="inning-score">{homeErrors}</div>
			</li>);

			return (
				<div key={this.state.currentGame.id} id="visualizer_container">
					<div id='score-container'>

						<div className='record'><img id='logo' src={Images[a_logo]}></img>{away_record}</div>
						<div id='away-score'><div>{awayTeam}</div>  <div>{awayScore}</div></div>
						<div id='home-score'><div>{homeTeam}</div>  <div>{homeScore}</div></div>
						<div className='record'><img id='logo' src={Images[h_logo]}></img>{home_record}</div>

					</div>

					<ul id="linescore">
						{inningArray}
					</ul>
					<div id="pitcher">
						On the Mound <div>{pitcher}</div> <div id='era'>{era}</div>
					</div>

					<div id="batter">
						Now Batting <br/>
						{batter}, {batter_ingame_stats} <br/>
						{batter_stats}
					</div>
				</div>
				);
		} else if ((this.state.active) && (this.state.currentGame.winning_pitcher)) {

				var winning_pitcher = this.state.currentGame.winning_pitcher.last + ', ' + this.state.currentGame.winning_pitcher.first;
				var losing_pitcher = this.state.currentGame.losing_pitcher.last + ', ' + this.state.currentGame.losing_pitcher.first;
				if (this.state.currentGame.save_pitcher.last !== "") {
					var save_pitcher = this.state.currentGame.save_pitcher.last + ', ' + this.state.currentGame.save_pitcher.first;
					var saves = this.state.currentGame.save_pitcher.saves;
				} else {
					var save_pitcher = "n/a";
					var saves = "n/a";
				};
				var w_wins = this.state.currentGame.winning_pitcher.wins;
				var w_losses = this.state.currentGame.winning_pitcher.losses;
				var l_wins = this.state.currentGame.losing_pitcher.wins;
				var l_losses = this.state.currentGame.losing_pitcher.losses;
				// var batter = this.state.currentGame.batter.last + ', ' + this.state.currentGame.batter.first;
				// var batter_stats = this.state.currentGame.batter.avg + ' ' + this.state.currentGame.batter.pos;

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
				var home_record = this.state.currentGame.home_win + '-' + this.state.currentGame.home_loss;
				var away_record = this.state.currentGame.away_win + '-' + this.state.currentGame.away_loss;
				var a_logo = this.state.currentGame.away_name_abbrev;
				var h_logo = this.state.currentGame.home_name_abbrev;

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
					<div id="visualizer_container" className='postgame'>

						<div id='score-container' className='postgame'>
							<div className='record'><img id='logo' src={Images[a_logo]}></img>{away_record}</div>
							<div id='away-score'><div>{awayTeam}</div>  <div>{awayScore}</div></div>
							<div id='home-score'><div>{homeTeam}</div>  <div>{homeScore}</div></div>
							<div className='record'><img id='logo' src={Images[h_logo]}></img>{home_record}</div>
						</div>

						<ul id="linescore" className='postgame'>
							{inningArray}
						</ul>
						<div id="pitcher" className='postgame'>
							WP: {winning_pitcher}  &nbsp; {w_wins}-{w_losses} <br/>
							LP: {losing_pitcher}  &nbsp; {l_wins}-{l_losses} <br/>
							Save: {save_pitcher}  &nbsp; s({saves})
						</div>
					</div>
					);

		} else if (this.state.active && (this.state.currentGame.status.status ==='Preview' || this.state.currentGame.status.status === 'Pre-Game' || this.state.currentGame.status.status === 'Warmup')) {
				var homeTeam = this.state.currentGame.home_team_name;
				var awayTeam = this.state.currentGame.away_team_name;
				var location = this.state.currentGame.location;
				var start_time = this.state.currentGame.time;
				var away_pitcher = this.state.currentGame.away_probable_pitcher.last + ', ' +
													this.state.currentGame.away_probable_pitcher.first + ' ERA: ' +
													this.state.currentGame.away_probable_pitcher.era + ' W/L: ' +
													this.state.currentGame.away_probable_pitcher.wins + '-' +
													this.state.currentGame.away_probable_pitcher.losses;

				var home_pitcher = this.state.currentGame.home_probable_pitcher.last + ', ' +
													this.state.currentGame.home_probable_pitcher.first + ' ERA: ' +
													this.state.currentGame.home_probable_pitcher.era + ' W/L: ' +
													this.state.currentGame.home_probable_pitcher.wins + '-' +
													this.state.currentGame.home_probable_pitcher.losses;
				var home_record = this.state.currentGame.home_win + '-' + this.state.currentGame.home_loss;
				var away_record = this.state.currentGame.away_win + '-' + this.state.currentGame.away_loss;
				var a_logo = this.state.currentGame.away_name_abbrev;
				var h_logo = this.state.currentGame.home_name_abbrev;


				return (
					<div id="visualizer_container" className='pregame'>
						<div id='pregame-info'>{location} {start_time}</div>
						<div id='score-container'>
							<div className='record'><img id='logo' src={Images[a_logo]}></img>{away_record}</div>
							<div id='away-score'><div>{awayTeam}</div>  <div>0</div></div>
							<div id='home-score'><div>{homeTeam}</div>  <div>0</div></div>
							<div className='record'><img id='logo' src={Images[h_logo]}></img>{home_record}</div>
						</div>
						<div id='pitcher'>{away_pitcher}</div>
						<div id='pitcher'>{home_pitcher}</div>
					</div>
					);
		} else {
			return (<div>Click on a Game!</div>);
		}
	}

});


module.exports = VisualItem;
