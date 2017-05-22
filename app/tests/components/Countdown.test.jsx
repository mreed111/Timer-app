var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(11);
      expect(countdown.state.count).toBe(11);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout( () => {
        expect(countdown.state.count).toBe(10);
        done();
      }, 1001);
    });

    it('should never set state.count to a negative number', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
      
      setTimeout( () => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });

  it('should pause countdown on paused status', (done) => {
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(4);
    countdown.handleStatusChange('paused');

    setTimeout(() => {
      expect(countdown.state.count).toBe(4);
      expect(countdown.state.countdownStatus).toBe('paused');
      done();
    }, 1002);
  });
  
  it('should stop countdown on stopped status', (done) => {
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSetCountdown(4);
    countdown.handleStatusChange('stopped');

    setTimeout(() => {
      expect(countdown.state.count).toBe(0);
      expect(countdown.state.countdownStatus).toBe('stopped');
      done();
    }, 1002);
  });
  
});
