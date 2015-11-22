Template.review.helpers({
    preImages: function() {
        return Images.find({
            status: 'pre'
        }); // Where Images is an FS.Collection instance
    },
});


Template.review.events({
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