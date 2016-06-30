var NewsConstants = require('../constants/newsConstants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var ScoreActions = {
	getTopStories: function(news) {
		Dispatcher.dispatch({
			actionType: NewsConstants.TOPSTORIES,
			news: news
		});
	},
};

module.exports = ScoreActions;