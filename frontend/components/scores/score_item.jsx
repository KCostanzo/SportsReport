var React = require('react');
var PropTypes = React.PropTypes;

var ScoreItem = React.createClass({

  render: function() {
    return (
      <div>
        <li className="score-item">{this.props.score}</li>
      </div>
    );
  }

});

module.exports = ScoreItem;
