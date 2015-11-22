Template.review.helpers({
    images: function(status) {
        return Images.find({
            status: status
        }); // Where Images is an FS.Collection instance
    },

    moderatorTrack: function() {
        return Session.get('moderator');
    }
});


Template.review.events({
    'click .review-btn': function() {
        $('.review-btn').removeClass('selected');
        $(event.target).addClass('selected');
    },

    'click .moderator': function() {
        Session.set('moderator', true);
        Session.set('curator', false);
    },

    'click .curator': function() {
        Session.set('moderator', false);
        Session.set('curator', true);
    }
})

Template.review.rendered = function() {
    Session.set('moderator', true);
}