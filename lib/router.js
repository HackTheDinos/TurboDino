Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading',
    notFoundTemplate : 'notFound',
    waitOn : function () {
        return [Meteor.subscribe('Images'), Meteor.subscribe('Highlights')];
    }
});

Router.route('/', {
    name : 'home',
    data : function () {
        return; //collection.find();
    }
});

Router.route('/submission', {
    name : 'submission',
    data : function () {
        return; //collection.find();
    }
});