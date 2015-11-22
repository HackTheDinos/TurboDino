Schemas = typeof Schemas !== 'undefined' ? Schemas : {};

Schemas.Notifications = new SimpleSchema({
    type: {
        type: String,
        allowedValues: ['comment', 'photo', 'highlight'],
    },
    typeId: {
        type: String
    },
    userId: {
        type: String
    },
    value: {
        type: Number,
        min: -1,
        max: 1
    }
});

Notifications = new Mongo.Collection('Notifications');
Notifications.attachSchema(Schemas.Notifications);
