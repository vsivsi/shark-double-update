if (Meteor.isClient) {

  if (typeof console !== 'undefined')
    console.log("Meteor version: " + Meteor.release);

  var numberUpdates = 0;
  var arrayUpdates = 0;
  var stringUpdates = 0;
  var objectStringUpdates = 0;
  var objectNumberUpdates = 0;
  var objectArrayUpdates = 0;

  Session.set('ticks',0);
  Template.hello.greeting = function () {
    return "Welcome to shark-double-update.";
  };

  Template.hello.numberTicks = function () {
    numberUpdates++;
    return Session.get('ticks') + numberUpdates/100000;
  }

  Template.hello.arrayTicks = function () {
    arrayUpdates++;
    return [Session.get('ticks'), arrayUpdates];
  }

  Template.hello.stringTicks = function () {
    stringUpdates++;
    return JSON.stringify([Session.get('ticks'), stringUpdates]);
  }

  Template.hello.objectStringTicks = function () {
    objectStringUpdates++;
    return { counts: JSON.stringify([Session.get('ticks'), objectStringUpdates]) };
  }

  Template.hello.objectArrayTicks = function () {
    objectArrayUpdates++;
    return { counts: [Session.get('ticks'), objectArrayUpdates] };
  }

  Template.hello.objectNumberTicks = function () {
    objectNumberUpdates++;
    return { tickCounts: Session.get('ticks'), updateCounts: objectNumberUpdates };
  }

  Meteor.setInterval((function () {Session.set('ticks', Session.get('ticks')+1)}), 1000);
}
