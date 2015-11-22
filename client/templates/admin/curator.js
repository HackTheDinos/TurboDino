Template.curator.helpers({
    images: function(status) {
        return Images.find({
            status: status
        }); // Where Images is an FS.Collection instance
    },
});

Template.curator.events({
    'click .yes': function() {
        console.log($('.review-bar .glyphicon .no'));
        $('.review-bar .glyphicon.no').css('background-color', '#ccc');
        $(event.target).css('background-color', '#5cb85c');
        this.fossil = true;
    },

    'click .no': function() {
        $('.review-bar .glyphicon.yes').css('background-color', '#ccc');
        $(event.target).css('background-color', 'red');
        this.fossil = false;
    },

    'click .star': function() {
        var star = $(event.target);
        if (this.highlight) {
            this.highlight = false;
            star.css('background-color', '#ccc');
        } else {
            this.highlight = true;
            star.css('background-color', '#ff99ff');
        }
    },

    'submit .officialize': function(e) {
        e.preventDefault();
        var reason = $('#reason').val();
        var status = 'nonfossil';
        var highlight = this.highlight;
        var photoId = this._id;
        console.log('highlight', highlight)
        if (this.fossil) {
            status = 'fossil';
        }
        Images.update({
            _id: this._id
        }, {
            $set: {
                status: status,
                officialStory: reason
            }
        })
        if (highlight) {
            console.log({
                photoId: photoId,
                userId: Meteor.user()._id,
                whyPicked: reason,
                createdAt: new Date()
            });
            Highlights.insert({
                photoId: photoId,
                userId: Meteor.user()._id,
                whyPicked: reason,
                createdAt: new Date()
            });
        }
    }
})
