var createThumb = function(fileObj, readStream, writeStream) {
    // Transform the image into a thumbnail with max length of 175px
    gm(readStream, fileObj.name()).resize(150).stream().pipe(writeStream);
};

var imageStore = new FS.Store.GridFS('Images'),
    thumbStore = new FS.Store.GridFS('Thumbs', { transformWrite: createThumb });

Images = new FS.Collection('Images', {
    stores: [
        thumbStore,
        imageStore
    ]
});