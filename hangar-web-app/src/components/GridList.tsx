import { useState } from 'react'
import './GridList.css'
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';
import { HangerListView } from '../pages/HomePage';

export interface GridListProps {
    avalibleListings: any[]
    isDetailedView: boolean
    shouldShow: boolean
    setIsDetailedViews(isDetailedView: boolean): void
    setHangarId(id: number): void
}

function GridList({avalibleListings, isDetailedView, shouldShow, setIsDetailedViews, setHangarId}: GridListProps) {

    const viewListingClicked = (id: number): void => {
        setIsDetailedViews(!isDetailedView)
        setHangarId(id)
    }

    if (!shouldShow) {
        return (
            <div className="gridContainer">
                <div className="theFlexer">
                    {(avalibleListings as HangerListView[]).map((listing) => (
                        <Card  key={listing.id} sx={{ maxWidth: 275 }}>
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
