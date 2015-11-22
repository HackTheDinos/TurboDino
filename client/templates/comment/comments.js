Template.comments.helpers({
    comments: function () {
        return Comments.find({photoId: this._id});
    }
});