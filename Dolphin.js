 if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.make({
    var sortOfFishes = 2; // set the number of sorts of fish
    var maxFishPerPart = 18;// set the maximum number of fish per part
    var delayMax = 10008; // delay

      // on each part except the first (part5)
      $('section:not(#part5)').each(addSomeFishes);


      function addSomeFishes() {
          // get a random number between 0 and 8
          var rand = Math.ceil(Math.random() * maxFishPerPart);
          // loop on 0 to 8 time
          for (var i = 0; i < rand; i++) {
              // add a fish to the part with some randomness ;)
              $(this).append('<div class="fish' + Math.ceil(Math.random() * sortOfFishes) + '" style="margin-top:'+Math.ceil(Math.random()*300)+';-webkit-animation-delay:' + Math.random() * delayMax + 'ms;-webkit-animation-duration:.3s,' + (6 + Math.ceil(Math.random() * 30)) + 's;z-index:'+(3+(Math.ceil(Math.random() * sortOfFishes)))+';"></div>');
          }
        }
    });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

// place and move dolphin around the screen




if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}