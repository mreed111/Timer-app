var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid value entered', () => {
    var testValue = 108;
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    // simulate entry of a valid value in the form Seconds text field.
    countdownForm.refs.seconds.value = testValue;
    TestUtils.Simulate.submit($el.find('form')[0]);  //fire sumbit action on the form.

    expect(spy).toHaveBeenCalledWith(testValue);
  });

  it('should not call onSetCountdown if invalid value entered', () => {
    var testValue = '1x8';
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    // simulate entry of a invalid value in the form Seconds text field.
    countdownForm.refs.seconds.value = testValue;
    TestUtils.Simulate.submit($el.find('form')[0]);  //fire sumbit action on the form.

    expect(spy).toNotHaveBeenCalled();
  });
});
