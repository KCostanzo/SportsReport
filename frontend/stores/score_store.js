var Store = require('flux/utils').Store;
var StoreConstants = require('../constants/scoreConstants');
var Dispatcher = require('../dispatcher/dispatcher.js');

var ScoreStore = new Store(Dispatcher);

var _scores = {};

var resetScores = function(scores) {
	_scores = {};
	scores.data.games.game.forEach(function(score) {
		_scores[score.id] = score;
		// debugger;
	})
	console.log(scores.data.games.game)

	ScoreStore.__emitChange();
};

ScoreStore.all = function() {
	var scores = [];
	for (var id in _scores) {
		scores.push(_scores[id]);
	}

	return scores;
};

ScoreStore.__onDispatch = function(payload) {
	switch(payload.actionType) {
		case StoreConstants.ALLSCORES:
			resetScores(payload.scores);
			break;
	}
};

module.exports = ScoreStore;