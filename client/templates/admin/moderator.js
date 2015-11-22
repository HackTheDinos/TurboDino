Template.moderator.helpers({
    images: function(status) {
        return Images.find({
            status: status
        }); // Where Images is an FS.Collection instance
    },
});


Template.moderator.events({
    'click .yes': function() {
        Images.update({_id: this._id},
            {$set: {status: 'new'}
        })
    },

    'click .no': function() {
        Images.update({_id: this._id},
            {$set: {status: 'flagged'}
        })
    }
})