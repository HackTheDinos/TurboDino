Schemas = typeof Schemas !== 'undefined' ? Schemas : {};

Schemas.Votes = new SimpleSchema({
    photoId: {
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

Votes = new Mongo.Collection('Votes');
Votes.attachSchema(Schemas.Votes);
