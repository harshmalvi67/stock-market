import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Chart from 'react-apexcharts';

const axios = require('axios').default;

export default function Stock() {

    let key = useParams().stock;
    const [stock, setstock] = useState([])


    useEffect(() => {

        const fetchdata = async () => {
            const data = await axios.get(`http://localhost:5000/stock/${key}`);
            setstock(data.data);
            console.log(data.data);
        }
        fetchdata();
    }, [])

    return (
        <div className="container">
            <div className="row m-2">
                <h1>{key}</h1>
                </div>
                <div className = "row">
                <div className="mixed-chart">
                    <Chart
                        options={{chart : {id : 'candlestick'}, xaxis : {
                            categories : []
                        }}}
                        series={[{
                            data: stock
                          }]}
                        type="candlestick"
                        width="100%"
                        zoom = {{
                            type : 'xy',
                            autoScaleYaxis : true,
                        }}
                    />
                </div> 
            </div>
        </div>
    )
}
