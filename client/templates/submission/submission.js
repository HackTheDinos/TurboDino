Template.submission.events({
    'submit .submission': function (event) {
        event.preventDefault();
        var file = document.getElementById('myFileInput').files[0];
        var location = document.getElementById('location').value;
        var story = document.getElementById('story').value;

        Images.insert(file, function (err, fileObj) {
            fileObj.update({$set : {
                userId: Meteor.user()._id,
                status: 'pre',
                location: location,
                userStory: story,
                officialStory: ''
            }});
        });
    }
});