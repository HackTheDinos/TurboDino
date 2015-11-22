Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading',
    notFoundTemplate : 'notFound',
    waitOn : function () {
        return [Meteor.subscribe('Images'), Meteor.subscribe('Comments'), Meteor.subscribe('Highlights')];
    }
});

Router.route('/', {
    name: 'home',
    data: function() {
        return; //collection.find();
    }
});

Router.route('/submission', {
    name: 'submission',
    data: function() {
        return; //collection.find();
    }
});

Router.route('/gallery/:type', {
    name: 'gallery',
    data: function() {
        return; //collection.find();
    }
});

Router.route('/image/:_id', {
    name: 'image',
    data: function() {
        var t = Images.findOne({
            _id: this.params._id
        });
        return t;
    }
});
