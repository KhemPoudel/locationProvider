import locationDb from './../both/collection.js'
Meteor.publish(
  'getLocation',function(){
    console.log('i am trying to publish here')
    console.log(locationDb.find({},{limit:5}).fetch())
    return locationDb.find({},{limit:5})
})
