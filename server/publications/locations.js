Meteor.publish('locations', function(filter,options) {
    return Locations.find(filter, options);
});