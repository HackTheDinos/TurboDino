Template.curator.helpers({
    images: function(status) {
        return Images.find({
            status: status
        }); // Where Images is an FS.Collection instance
    },
});

Template.curator.events({
    'click .yes': function() {
        $('.review-bar .glyphicon').css('background-color', '#ccc');
        $(event.target).css('background-color', '#5cb85c');
        this.fossil = true;
    },

    'click .no': function() {
        $('.review-bar .glyphicon').css('background-color', '#ccc');
        $(event.target).css('background-color', 'red');
        this.fossil = false;
    },

    'submit .officialize': function(e) {
        e.preventDefault();
        var reason = $('#reason').val();
        if (this.fossil) {
            Images.update(
                {_id: this._id},
                {$set: 
                    {
                        status: 'fossil',
                        officialStory: reason
                    }
                }
            )
        } else {
            Images.update(
                {_id: this._id},
                {$set: 
                    {
                        status: 'nonfossil',
                        officialStory: reason
                    }
                }
            )
        }
    }
})