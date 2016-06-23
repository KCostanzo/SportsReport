var ScoreServerActions = require('../actions/score_server_actions');

var ScoreUtil = {
	fetchAllScores: function () {
		

		$.ajax({
			method: 'GET',
			url: 'http://gd2.mlb.com/components/game/mlb/year_2016/month_06/day_23/master_scoreboard.json',
			success: function (scores) {
				ScoreServerActions.getScores(scores);
			}
		});
	}
};

module.exports = ScoreUtil;
