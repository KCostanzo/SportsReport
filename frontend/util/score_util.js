var ScoreServerActions = require('../actions/score_server_actions');

var ScoreUtil = {
	fetchAllScores: function () {
		var date = new Date();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var day = date.getDate();
		var digits = [1,2,3,4,5,6,7,8,9];
		if (digits.indexOf(month) !== -1) {
			month = '0' + month;
		}

		$.ajax({
			method: 'GET',
			url: 'http://gd2.mlb.com/components/game/mlb/year_' +
						year + '/month_' + month +
						'/day_' + day + '/master_scoreboard.json',
			success: function (scores) {
				ScoreServerActions.getScores(scores);
			}
		});
	}
};

module.exports = ScoreUtil;
