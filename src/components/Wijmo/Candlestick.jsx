import React, {useState, useEffect} from 'react';
import * as Chart from '@grapecity/wijmo.react.chart';
import { getAssetData, updateData } from '../../data';


const tooltip = (`<b>{date:MMM dd}</b><br/>
                <table>
                    <tr><td>high:</td><td>{high}</td><tr/>
                    <tr><td>low:</td><td>{low}</td><tr/>
                    <tr><td>open:</td><td>{open}</td><tr/>
                    <tr><td>close:</td><td>{close}</td><tr/>
                </table>
            </b>`
        )



const palette =  ['rgba(70,107,176,1)']



const Candlestick = () => {

    const [data, setData] = useState(getAssetData());

    useEffect(() => {
    
        const interval = setInterval(() => {

            setData(data =>  [...data.slice(1), updateData(data)])

        }, 3000);
        
        return () => clearInterval(interval)

    }, []);
          
    return (
        <div className="chart app-box">

            <div className="header"> <h3>Statistics</h3> </div>

            <Chart.FlexChart 
                bindingX="date" 
                itemsSource={data} 
                chartType="Candlestick" 
                tooltipContent={tooltip} palette={palette}>

            <Chart.FlexChartSeries binding="high,low,open,close" />
            
            </Chart.FlexChart>

        </div>
    )

}

export default Candlestick
