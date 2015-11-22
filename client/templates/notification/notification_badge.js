Template.notificationBadge.helpers({
    newNotifications: function () {
        return Notifications.find({userId: Meteor.user()._id, seen: false}).count();
    },
    noNewNotifications: function () {
        return Notifications.find({userId: Meteor.user()._id, seen: false}).count() === 0;
    }
});