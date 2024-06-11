import React, { useState } from 'react';
import './HomePage.css';
import { Autocomplete, Button, TextField } from '@mui/material';
import GridList from '../components/GridList';

export function HomePage() {
    const cities1 = [
        { label: 'Atlanta' },
        { label: 'Baxley' },
        { label: 'Perry' },
        { label: 'Hawkinsville' },
        { label: 'Monroe' },
        { label: 'Jonesboro' },
        { label: 'Daytona Beacj' },
        { label: 'Boston' },
        { label: 'Harrisburg' },
        { label: 'Norfolk' },
        { label: 'Alberquere' }
    ]

    const states1 = [
        { label: 'GA' },
        { label: 'FL' },
        { label: 'MA' },
        { label: 'VA' },
        { label: 'PA' },
        { label: 'NM' },
    ]

    const [cities, setCities] = useState(cities1);
    const [states, setStates] = useState(states1);

    return (
        <div className='Home-page-container'>
            <div className='Title-container'>
                <div className='Title'>
                    Plane Hangars
                    <div className='Slogan'>
                    Where flight begins and ends...
                    </div>
                </div>
                <div className='Search-container'>
                    <Autocomplete
                        disablePortal
                        options={cities}
                        sx={{ width: 450 }}
                        renderInput={(params) => <TextField {...params} label="Search City" />}
                    />
                    <Autocomplete
                        disablePortal
                        options={states}
                        sx={{ width: 100 }}
                        renderInput={(params) => <TextField {...params} label="State " />}
                    />
                    {/* <TextField id="standard-basic" label="Search" variant="standard" /> */}
                    <Button variant="contained">Search</Button>
                </div>
            </div>
            <GridList/>
        </div>
    );
}