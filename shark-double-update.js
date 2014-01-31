if (Meteor.isClient) {

  if (typeof console !== 'undefined')
    console.log("Meteor version: " + Meteor.release);

  var updates = 0;
  Session.set('clicks',0);
  Template.hello.greeting = function () {
    return "Welcome to shark-double-update.";
  };

  Template.hello.clicks = function () {
    updates++;
    return [Session.get('clicks'), updates];
  }

  Meteor.setInterval((function () {Session.set('clicks',Session.get('clicks')+1)}), 1000);
}
