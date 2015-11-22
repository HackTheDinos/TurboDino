Template.home.helpers({
    photoOfTheWeek: function() {
    // return Highlight.find().sort({_id: -1}).limit(1).blurb;
    },

})


Template.home.events({
    'click .submit-fossil': function() {
        Router.go('/submission');
    },
    'click .view-fossil': function() {
        Router.go('/gallery/new');
    }
})