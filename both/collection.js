let locationDb = new Mongo.Collection('LocationDb')

Meteor.methods({
  'insertLocation':(location)=>{
    console.log(locationDb.find())
    let ifData=locationDb.findOne({ "identifier": 1 })
    if(ifData){
      locationDb.update({ "identifier": 1 },location)
    }
    else{
      locationDb.insert(location)
    }
  },
  'simulateInsert':()=>{
    locs=[{lat:27.7097655,lng:85.3271016,identifier:1},
      {lat:27.710408,lng:85.322753,identifier:1},
      {lat:27.7105253,lng:85.3239688,identifier:1},
      {lat:27.709006, lng:85.329848,identifier:1},
      {lat:27.708239, lng:85.333466,identifier:1}
    ]
      _.each(locs,(loc,index)=>{
      locationDb.update({"identifier":1},loc)
      Meteor._sleepForMs(2000)
    })
  }
})

export default locationDb
