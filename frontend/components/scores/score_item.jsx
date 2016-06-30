var React = require('react');
var PropTypes = React.PropTypes;

var ScoreItem = React.createClass({
	scoreDisplay: function() {
		// console.log(this.props.score.linescore.r.away);
		var awayScore = this.props.score.linescore.r.away;
		var homeScore = this.props.score.linescore.r.home;

		return (
			<div className='current-score'>
			{awayScore} <br />{homeScore}
			</div>
		);
	},

	statusDisplay: function() {
		var gameStatus = this.props.score.status.status;
		var inning = this.props.score.status.inning;
		var inningState = this.props.score.status.inning_state;
		var outs = this.props.score.status.o;

		var time = this.props.score.time;
		var zone = this.props.score.time_zone;

		if (inningState === 'Bottom'){
			inningState = 'Bot';
		};

		if (gameStatus === 'In Progress') {
			return (
				<div className='game-status'>
				{inning}  {inningState} {outs} outs
				</div>
				)
		} else if (gameStatus === 'Preview'){
			return <div className='diff-status'>{time} {zone}</div>

		} else {
			return (
			<div className='diff-status'>
			Final
			</div>
			)
		}
	},

	recordDisplay: function() {
		var awayWin = this.props.score.away_win;
		var awayLoss = this.props.score.away_loss;
		var homeWin = this.props.score.home_win;
		var homeLoss = this.props.score.home_loss;
		return (
			<div className='current-record'>
				{awayWin}-{awayLoss} <br />
				{homeWin}-{homeLoss}
			</div>
		);
	},

	teamDisplay: function() {
		var awayNameAbbrev = this.props.score.away_name_abbrev;
		var homeNAmeAbbrev = this.props.score.home_name_abbrev;
		return (
			<div className='team-names'>
				{awayNameAbbrev} <br /> {homeNAmeAbbrev}
			</div>
			);
	},

	//commenting

	render: function() {
		console.log(this.props.score);
		var scores;
		if (this.props.score.linescore) {
			scores = this.scoreDisplay();
		} else {
			scores = this.recordDisplay();
		}

		return (
	  		<div className='score-item-container'>
	   			 <li className="score-item">{this.statusDisplay()} {this.teamDisplay()}  {scores}</li>
	  		</div>
			);
	}


});

module.exports = ScoreItem;
