var NewsServerActions = require('../actions/news_server_actions');

var NewsUtil = {
	fetchTopStories: function () {
		$.ajax({
			method: 'GET',
			url: 'http://bleacherreport.com/api/front/lead_articles.json?limit=10',
			success: function (news) {
				NewsServerActions.getnews(news);
			}
		});
	}
};

module.exports = NewsUtil;
