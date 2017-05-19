var React = require('react');

var Clock = React.createClass({
  //
  getDefaultProps: function () {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function (totalSeconds) {
    if (typeof(totalSeconds) === 'number' && totalSeconds > 0) {
      var seconds = totalSeconds % 60;
      seconds = (seconds < 10) ? '0' + seconds : seconds;
      var minutes = Math.floor(totalSeconds / 60);
      minutes = (minutes < 10) ? '0' + minutes : minutes;
      return minutes + ':' + seconds;
    }
    return '00:00';
  },

  render: function () {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;