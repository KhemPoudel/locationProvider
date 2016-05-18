import React, {PropTypes} from 'react'
import {Geolocation} from 'meteor/mdg:geolocation'
import LocationDb from './../../both/collection.js'
class Home extends React.Component{
  constructor(props){
    super(props)
    this.locateState=null
    this.startLocationInfo=this.startLocationInfo.bind(this)
    this.stopLocationInfo=this.stopLocationInfo.bind(this)
  }

  startLocationInfo(evt){
    Tracker.autorun((c)=>{
      this.locateState=c
      console.log(c)
      let loc=Geolocation.latLng()
      locationInfo={'lat':loc.lat,'lng':loc.lng,'identifier':1}
      Meteor.call('insertLocation',locationInfo)
    })
  }

  stopLocationInfo(){
    this.locateState.stop()
    let sub=Meteor.subscribe('getLocation')
    console.log(sub.ready())
    let d=LocationDb.find().fetch()
    console.log(d.length)
  }
  render(){
    return (
      <div>
        <h3>Welcome to Location Tracker</h3>
        <h6>You can get tracked by clicking on start button</h6>
        <button onClick={this.startLocationInfo} type="button" id="startBtn" className="btn btn-success btn-lg" value="Start" >Start</button>
        <button onClick={this.stopLocationInfo} type="button" id="stopBtn" className="btn btn-danger btn-lg" value="Stop" >Stop</button>
      </div>
    )
  }
}

export default Home;
