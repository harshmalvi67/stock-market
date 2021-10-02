import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios').default;

export default function Dashboard() {

    let list_style = {
        "height" : "relative",
        "text-align" : "left"
    }

    const [stocklist, setStocklist] = useState([]);

    useEffect(() => {
        
        const fetchdata = async () => {
            const data = await axios.get('http://localhost:3000/');
            console.log(data);
            setStocklist(data.data);
        }
        fetchdata();
    }, [])    

    return (
            <div className="card" style={{"width" : "100%"}}>
                <ul className="list-group list-group-flush">
                    {stocklist.map((stock) => {
                        return <Link to={`/stock/${stock}`} className="list-group-item" style={list_style}>{stock}</Link>
                    })}
                </ul>
            </div>
    )
}
