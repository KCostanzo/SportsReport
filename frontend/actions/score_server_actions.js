var ScoreConstants = require('../constants/scoreConstants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var ScoreActions = {
	getScores: function(scores) {
		Dispatcher.dispatch({
			actionType: ScoreConstants.ALLSCORES,
			scores: scores
		});
	},

	emptyScores: () => {
		Dispatcher.dispatch({
			actionType: "EMPTYSCORES",
			scores: "none"
		});
	},

	setGame: function(game) {
		Dispatcher.dispatch({
			actionType: ScoreConstants.SETGAME,
			game: game
		});
	}
};

module.exports = ScoreActions;