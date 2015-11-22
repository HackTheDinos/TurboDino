Meteor.publish('Images', function () {
    return Images.find();
});

Meteor.publish('Comments', function () {
    return Comments.find();
});