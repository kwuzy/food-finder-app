import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';



export default function Restaurant() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    function handleLatChange(event) {
        setLat(event.target.value);
        console.log(lat);
    }
    function handleLngChange(event) {
        setLng(event.target.value);
    }

    function handleSearch(event) {
        console.log(`lat is: ${lat}`);
        console.log(`lng is: ${lng}`);
    }
    return (
        <div>
            <div className="lat-lng-inputs">
                <Input placeholder="lat" onChange={handleLatChange} />
                <Input placeholder="long" onChange={handleLngChange} />
                <Button onClick={handleSearch} color="secondary" variant="outlined">Find Food</Button>
            </div>
        </div>
    )
}





