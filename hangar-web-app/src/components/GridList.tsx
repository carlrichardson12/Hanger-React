import { useState } from 'react'
import  './GridList.css'
import { Card, CardContent } from '@mui/material';
import React from 'react';
function GridList() {

    const avalibleListings = [
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a bueatif place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a bueatif place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a bueatif place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a bueatif place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a bueatif place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }

    ];

  const [listings, setListings] = useState(avalibleListings)

    return (
        <div className="gridContainer">
            <div className="theFlexer">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default GridList
