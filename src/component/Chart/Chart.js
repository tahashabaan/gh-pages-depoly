import React from 'react';
import Chartbar from'./Chartbar';
import './Chart.css';
const Chart = (props) => {
  const dataPiontValues=props.dataPionts.map((datapiont) => datapiont.value);
  const totalMax=Math.max(...dataPiontValues);
  return ( 
    <div className='chart'> 
      {props.dataPionts.map(dataPiont =>
      <Chartbar
      key={dataPiont.label}
      value={dataPiont.value}
      label={dataPiont.label}
      maxValue={ totalMax}
      />

      )}
    </div>
  )
}

export default Chart