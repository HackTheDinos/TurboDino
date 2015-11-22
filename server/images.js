Images.deny({
    insert : function () {
        return false;
    },

    update : function () {
        return false;
    },

    remove : function () {
        return false;
    },

    download : function () {
        return false;
    }

});

Images.allow({
    insert : function () {
        return true;
    },

    update : function () {
        return true;
    },

    remove : function () {
        return true;
    },

    download : function () {
        return true;
    }
});

Meteor.methods({
    saveImage : function (args, fileLocation) {
        Images.insert(fileLocation, function (err, fileObj) {
            fileObj.update({$set : {
                userId: args.userId,
                status: 'pre',
                location: args.location,
                userStory: args.userStory,
                officialStory: args.officialStory
            }});
        });
    }
});