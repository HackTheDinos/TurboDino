Schemas = typeof Schemas !== 'undefined' ? Schemas : {};

Schemas.Comments = new SimpleSchema({
    photoId: {
        type: String
    },
    userId: {
        type: String
    },
    text: {
        type: String,
        max: 300
    }
});

Comments = new Mongo.Collection('Comments');
Comments.attachSchema(Schemas.Comments);
