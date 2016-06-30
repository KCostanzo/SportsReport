var React = require('react');
var PropTypes = React.PropTypes;
var Stories = require('./news/index_item');
var NewsUtil = require('../util/news_util');
var NewsStore = require('../stores/news_store');

var Index = React.createClass({
	getInitialState: function() {
		return {stories: []};
	},

	componentDidMount: function() {
		this.newsListener = NewsStore.addListener(this.newsChange);
		NewsUtil.fetchTopStories();
	},

	newsChange: function() {
		this.setState({stories: NewsStore.topStories()});
	},

	componentWillUnmount: function() {
		this.newsListener.remove();
	},

  render: function() {
    return (
      <div className="index-container">
				game stats + data visualization will update here depending on what
				game you select
      </div>
    );
  }

});

module.exports = Index;
