import { useState } from 'react'
import './GridList.css'
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';
function GridList(props: any) {

    const avalibleListings = [
        {
            id:1,
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id:2,
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id:3,
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id:4,
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id:5,
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id:6,
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },

        {
            id:7,
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id:8,
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id:9,
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id:10,
            title: 'A beautiful hanger in Atlanta',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
    ];

    const [listings, setListings] = useState(avalibleListings)
    const viewListingClicked = () => {
        props.setIsDetailedViews(!props.isDetailedView)
    }

    if (!props.shouldShow) {
        return (
            <div className="gridContainer">
                <div className="theFlexer">
                    {listings.map((listing) => (
                        <Card  key={listing.id} sx={{ minWidth: 275 }}>
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
                                <Button size="small" onClick={() => {viewListingClicked()}}>
                                    Learn More</Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default GridList
