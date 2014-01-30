if (Meteor.isClient) {
  var updates = 0;
  Session.set('clicks',0);
  Template.hello.greeting = function () {
    return "Welcome to shark-double-update.";
  };

  Template.hello.clicks = function () {
    updates++;
    return [Session.get('clicks'), updates];
  }

  Template.hello.events({
    'click input': function () {
      Session.set('clicks',Session.get('clicks')+1);
      if (typeof console !== 'undefined')
        console.log("You have pressed the button " + Session.get('clicks') + " times.");
    }
  });
}
