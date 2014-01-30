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
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        Session.set('clicks',Session.get('clicks')+1);
        console.log("You pressed the button");
    }
  });
}
