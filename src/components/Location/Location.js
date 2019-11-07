import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

const Location = () => {

  const [ lat, setLat ] = useState(null);
  const [ errorMsg, setErrorMsg ] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      error => setErrorMsg(error.message)
    );
  }, []);

  let content;

  if (errorMsg) {
    content = <div>Error: {errorMsg}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat}/>
  } else {
    content = <Spinner message="Please accept location request"/>
  }

  return (
    <div className="border red">{content}</div>
  )
}

export default Location;