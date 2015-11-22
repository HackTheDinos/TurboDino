Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading',
    notFoundTemplate : 'notFound',
    waitOn : function () {
        return [
            Meteor.subscribe('Images'), 
            Meteor.subscribe('Comments'), 
            Meteor.subscribe('Highlights'),
            Meteor.subscribe('userData')
        ];
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
    name: 'imageDetail',
    data: function() {
        return Images.findOne({
            _id: this.params._id
        });
    }
});

Router.route('/admin/review', {
    name: 'review',
    onBeforeAction: function(pause) {
        if (Meteor.user().type == 'admin') {
            this.render()
        } else {
            this.redirect('/');
        }
    },
    data: function() {
        return;
    }
});
