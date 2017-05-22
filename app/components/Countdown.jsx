var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
          this.setState({count: 0});
          // no 'break;'  control will fall through...
          // both blocks will execute for 'stopped'.
        case 'paused': 
          // clear the running timer.
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    // clear the running timer.
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval( () => {
      //
      var newCount = this.state.count - 1;
      this.setState({
        count: (newCount >= 0) ? newCount : 0
      });

      if (newCount === 0) {
        // when counter reaches zero(0), this will clear the 
        // running timer and re-display the countdownForm component.
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    //debugger;
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  //
  render: function () {
    var {count, countdownStatus} = this.state;
    //debugger;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };

    return (
        <div>
          {/* */}
          <h1>Countdown</h1>
          <Clock totalSeconds={count}/>
          {renderControlArea()}
        </div>
    );
  }
});

module.exports = Countdown;
