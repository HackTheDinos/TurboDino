Schemas = typeof Schemas !== 'undefined' ? Schemas : {};

Schemas.Highlights = new SimpleSchema({
    photoId: {
        type: String
    },
    userId: {
        type: String
    },
    whyPicked: {
        type: String
    },
    createdAt: {
        type: Date
    }
});

Highlights = new Mongo.Collection('Highlights');
Highlights.attachSchema(Schemas.Highlights);
