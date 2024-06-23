import { useState } from 'react'
import './GridList.css'
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';
import { HangerListView } from '../pages/HomePage';
function GridList(props: any) {

    const [listings, setListings] = useState(props.avalibleListings as HangerListView[])
    const viewListingClicked = (id: number): void => {
        props.setIsDetailedViews(!props.isDetailedView)
        props.setHangarId(id - 1)
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
                                <Button size="small" onClick={() => {viewListingClicked(listing.id)}}>
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
