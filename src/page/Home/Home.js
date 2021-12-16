import React from 'react'
import BasicLayout from '../../layout/BasicLayout';

import "./Home.scss";

export default function Home(props) {
  const {setrefreshCheckLogin} = props;
  return (
    <BasicLayout className="home" setrefreshCheckLogin = {setrefreshCheckLogin}>
      <h2>Estamos en HOME</h2>
    </BasicLayout>     
    
  )
}
