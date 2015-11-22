Meteor.publish('Images', function () {
    return Images.find();
});

Meteor.publish('Comments', function () {
    return Comments.find();
});

Meteor.publish('Highlights', function () {
    return Highlights.find({}, {sort: {createdAt: -1}, limit: 1});
});