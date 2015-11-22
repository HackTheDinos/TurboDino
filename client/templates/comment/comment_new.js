Template.commentNew.events({
    'submit .comment': function (event) {
        event.preventDefault();
        var comment = document.getElementById('comment').value;
        var photoId = document.getElementById('photoId').value;
        var args = {
            photoId: photoId,
            userId: Meteor.user()._id,
            text: comment
        };

        Comments.insert(args, function (err, commentObj) {
            if (err) {
                console.log(err)
            }
        });
    }
});

Template.commentNew.helpers({
    photoId: function () {
        return this._id;
    }
})