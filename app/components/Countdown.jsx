var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      // state has changed.  update the clock.
      switch (this.state.countdownStatus) {
        case 'started': 
          this.startTimer();
          break;
        case 'stopped': 
          //
          break;
        case 'paused': 
          //
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval( () => {
      //
      var newCount = this.state.count - 1;
      this.setState({
        count: (newCount >= 0) ? newCount : 0
      });

    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    debugger;
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  //
  render: function () {
    var {count} = this.state;
    //debugger;
    return (
        <div>
          {/* */}
          <h1>Countdown</h1>
          <Clock totalSeconds={count}/>
          <CountdownForm onSetCountdown={this.handleSetCountdown} />
        </div>
    );
  }
});

module.exports = Countdown;
