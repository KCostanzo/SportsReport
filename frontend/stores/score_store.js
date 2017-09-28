var Store = require('flux/utils').Store;
var StoreConstants = require('../constants/scoreConstants');
var Dispatcher = require('../dispatcher/dispatcher.js');

var ScoreStore = new Store(Dispatcher);

var _scores = {};
var _currentGame = null;

var setGame = function(game) {
	_currentGame = game;
	ScoreStore.__emitChange();
};

var resetScores = function(scores) {
	// console.log("scores " + scores);
	_scores = {};

	if (!scores) {
		console.log("undefined");
	} else {
		scores.data.games.game.forEach(function(score) {
			_scores[score.id] = score;
		});
	}

	ScoreStore.__emitChange();
};

ScoreStore.all = function() {
	var scores = [];
	for (var id in _scores) {
		scores.push(_scores[id]);
	}
	console.log("scorestore.all");

	return scores;
};

ScoreStore.currentGame = function() {
	return _currentGame;
};

ScoreStore.__onDispatch = function(payload) {
	switch(payload.actionType) {
		case StoreConstants.ALLSCORES:
			resetScores(payload.scores);
			break;
		case "EMPTYSCORES":
			resetScores();
			break;
		case StoreConstants.SETGAME:
			setGame(payload.game);
			break;
	}
};

module.exports = ScoreStore;
