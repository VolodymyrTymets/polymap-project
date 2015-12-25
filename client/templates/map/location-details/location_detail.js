Template.LocationDetail.helpers({
    'location':function () {
        return Locations.findOne({_id:this._id})
    }

})