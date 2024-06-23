import { Button } from "@mui/material";
import { useState } from "react";


function DetailedView(props: any) {
    const hangarDetail = props.hangarDetail

    const gobackClicked = () => {
        props.setIsDetailedViews(!props.isDetailedView)
    }

    if (props.shouldShow) {
        return (
        <div className="hangar-details-container">
            <div className="hangar-details">
                <img src={hangarDetail.image}/>
            </div>
            <div className="title-container">
                <div className="hangar-title">
                {hangarDetail.title}
                </div>
                <div className="location">
                    {hangarDetail.location}
                </div>
            </div>
            <div className="description-container">
                {hangarDetail.hangarDesc}
            </div>
            <div className="button-container">
            <Button
                variant="outlined"
            >
                Contact Owner
                </Button>
                <Button
                onClick={()=>{gobackClicked()}}
                variant="outlined"
            >
                Go Back
                </Button>
            </div>
        </div>
    )
    } else {

        return (<></>)
    }


}

export default DetailedView

export interface HangarDetails {
    location: string;
    image: string;
    title: string;
    hangarDesc: string;
}
