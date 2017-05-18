var React = require('react');

var Clock = require('Clock');

var Timer = React.createClass({
  //
  render: function () {
    return (
        //
        <div>
          <p>Timer Component</p>
          <Clock/>
        </div>
    );
  }
});

module.exports = Timer;
