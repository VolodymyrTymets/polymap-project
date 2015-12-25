Locations = new Mongo.Collection('locations');

if(Meteor.isServer){
    if(!Locations.findOne()){
      Fixtures.init()

    }
}
