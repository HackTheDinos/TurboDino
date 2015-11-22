Template.images.helpers({
    images: function(status) {
        return Images.find({
            status: status
        }); // Where Images is an FS.Collection instance
    }
});
