var React = require('react');
var PropTypes = React.PropTypes;

var ScoreItem = React.createClass({



	scoreDisplay: function() {
		console.log(this.props.score.linescore.r.away);
		var away_score = this.props.score.linescore.r.away;
		var home_score = this.props.score.linescore.r.home;
		// var location = this.props.score.loaction;
		// console.log(away_name_abbrev + ' ' + home_name_abbrev);
		return (
			<div className='current-score'>
			{away_score} <br/>{home_score}
			</div>
		);
	},

	recordDisplay: function() {
		var away_win = this.props.score.away_win;
		var away_loss = this.props.score.away_loss;
		var home_win = this.props.score.home_win;
		var home_loss = this.props.score.home_loss;
		return (
			<div className='current-record'>
				{away_win}-{away_loss} <br/>
				{home_win}-{home_loss}
			</div>
		);
	},

	teamDisplay: function() {
		var away_name_abbrev = this.props.score.away_name_abbrev;
		var home_name_abbrev = this.props.score.home_name_abbrev;
		return (
			<div className='team-names'>{away_name_abbrev} <br/> {home_name_abbrev} </div>
			);
	},

	render: function() {
		if (this.props.score.linescore) {
			var scores = this.scoreDisplay();
		} else {
			var scores = this.recordDisplay();
		}
		// debugger;
		return (
	  		<div className='score-item-container'>
	   			 <li className="score-item">{this.teamDisplay()}  {scores}</li>
	  		</div>
	);
	}

});

module.exports = ScoreItem;
