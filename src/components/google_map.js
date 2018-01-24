import React, { Component } from 'react';

class GoogleMap extends Component {

componentDidMount(){
  new google.maps.Map(this.refs.map , {
    
  })
}
}

export default GoogleMap;
