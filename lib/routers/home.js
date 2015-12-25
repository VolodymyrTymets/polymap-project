Router.route('home',{
    path:'/',
    template:'Home',
    waitOn:function () {
        return Meteor.subscribe('locations',{});
    }
})