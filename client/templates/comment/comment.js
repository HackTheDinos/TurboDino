Template.comment.helpers({
    user: function () {
        return Meteor.users.findOne({_id: this.userId});
    },
    text: function () {
        return this.text;
    }
});