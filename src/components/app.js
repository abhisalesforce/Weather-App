import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import BodyBackgroundColor from 'react-body-backgroundcolor';


export default class App extends Component {
  render() {
    return (
      <BodyBackgroundColor backgroundColor='#FFFF00'>
      <div>

      <SearchBar />
         <WeatherList />

      </div>
</BodyBackgroundColor>
    );
  }
}
