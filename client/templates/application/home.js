Template.home.helpers({
    photoOfTheWeek: function() {
        var highlight = Highlights.findOne();
        var image = highlight && Images.findOne({_id: highlight.photoId})
        return image;
    },
    highlight: function () {
        var highlight = Highlights.findOne();
        return highlight;
    }
})


Template.home.events({
    'click .submit-fossil': function(e) {
        if (Meteor.user()) {
            Router.go('/submission');
        } else {
            e.stopPropagation();
            var menu = $('.navbar-toggle.collapsed');
            if (menu) {
                $('.navbar-toggle.collapsed').removeClass('collapsed');
                menu.attr('aria-expanded', true);
            }
            $("#login-dropdown-list").addClass('open');
            $('body').scrollTop(0)
        }
    },

    // 'click .test': function() {
    //     Highlights.insert({
    //         userId: "24hWTALjo7T8PimLz",
    //         photoId: "S89rR6NTYpzW2W7HJ",
    //         whyPicked: "NEW NEW NEW",
    //         createdAt: new Date()
    //     })
    // }
    'click .view-fossil': function() {
        Router.go('/gallery/new');
    }
})