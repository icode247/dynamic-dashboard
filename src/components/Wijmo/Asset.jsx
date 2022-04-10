import React, { useState, useEffect } from 'react';
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import { getAssets, randomInt } from '../../data';


const Asset = () => {


    const [data, setData] = useState(getAssets());

    useEffect(() => {

        const interval = setInterval(() => {
            setData(getAssets())
        }, 500)

        return () => clearInterval(interval)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="sidebar">

            <div className="assets">

                <FlexGrid 
                    itemsSource={data} 
                    selectionMode="Row">
                    <FlexGridColumn header="Asset" binding="asset" width=".4*" />
                    <FlexGridColumn header="Price %" binding="priceUpdate" width="*"  /> 
                </FlexGrid>

            </div>

        </div>
    )
}

export default Asset;