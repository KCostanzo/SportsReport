var Store = require('flux/utils').Store;
var NewsConstants = require('../constants/newsConstants');
var Dispatcher = require('../dispatcher/dispatcher.js');

var NewsStore = new Store(Dispatcher);

var _news = {};

var resetNews = function(news) {
	_news = {};
	console.log(news);
	debugger;

	// news.data.games.game.forEach(function(score) {
	// 	_news[score.id] = score;
	// });
	
	NewsStore.__emitChange();
};

NewsStore.topStories = function() {
	var news = [];
	for (var id in _news) {
		news.push(_news[id]);
	}

	return news;
};

NewsStore.__onDispatch = function(payload) {
	switch(payload.actionType) {
		case NewsConstants.TOPSTORIES:
			resetNews(payload.scores);
			break;
	}
};

module.exports = NewsStore;
