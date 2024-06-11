import { useState } from 'react'
import './GridList.css'
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';
import React from 'react';
function GridList() {

    const avalibleListings = [
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },

        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
    ];

    const [listings, setListings] = useState(avalibleListings)
    return (
        <div className="gridContainer">
            <div className="theFlexer">
                {listings.map((listing) => (
                    <Card sx={{ minWidth: 275 }}>
                        <CardHeader
                            title={listing.title}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={listing.imgUrl}
                        />
                        <CardContent>
                            {listing.description}
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default GridList
