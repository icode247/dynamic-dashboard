import * as React from 'react';
import {RadialGauge, Range} from '@grapecity/wijmo.react.gauge';
import { guageData } from '../../data';

const Trade = () => {

    const { max, value, range1, range2 } = guageData()

    return (
        <div className="trade app-box">

            <RadialGauge 
                min={0} 
                max={max} 
                value={value} 
                >

                <Range min={0} max={range1} color="red"/>
                <Range min={range1} max={range2} color="yellow"/>
                <Range min={range2} max={max} color="green"/>
                        
            </RadialGauge>

        </div>
    )

}

export default Trade