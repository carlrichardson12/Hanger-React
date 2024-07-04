import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { Autocomplete, Button, TextField } from '@mui/material';
import GridList from '../components/GridList';
import DetailedView, { HangarDetails } from '../components/DetailedView';
import { statesArray } from '../resources/resources';

export function HomePage() {

    const avalibleListings = [
        {
            id:1,
            title: 'A this is a cheerokee',
            description: 'This is a beautiful place to store your plan',
            imgUrl: 'https://barnstormers.s3.amazonaws.com/media/listing_images/medium/medium_image_1886274_1_1707652206.jpeg?9217'
        },
        {
            id:2,
            title: 'Sweet Home Alabama (Actually this is canada)',
            description: 'A awesome grass strip next to your home',
            imgUrl: 'https://barnstormers.s3.amazonaws.com/media/listing_images/medium/medium_image_1898276_1_1712344372.jpeg?5254'
        },
        {
            id:3,
            title: 'This hangar is in canada',
            description: 'This one is actually in canada :)',
            imgUrl: 'https://barnstormers.s3.amazonaws.com/media/listing_images/medium/medium_image_1914474_2_1718739848.jpeg?6419'
        },
        {
            id:4,
            title: 'Field Airplane',
            description: 'Out here in the field',
            imgUrl: 'https://barnstormers.s3.amazonaws.com/media/listing_images/medium/medium_image_1914402_1_1718727984.jpeg?6509'
        },
        {
            id:5,
            title: 'Grumman AA5',
            description: 'You Need a hanger for your AA5 dont you?',
            imgUrl: 'https://barnstormers.s3.amazonaws.com/media/listing_images/medium/medium_image_1913958_1_1718495112.jpeg?2908'
        },
        {
            id:6,
            title: 'Annother Prudey Hanger for a Grumman!',
            description: 'Grummans need a home too friend',
            imgUrl: 'https://barnstormers.s3.amazonaws.com/media/listing_images/medium/medium_image_1907867_2_1715957619.jpeg?3358'
        },

        {
            id:7,
            title: 'This Grumman is beautiful!',
            description: 'Hangar Me Please',
            imgUrl: 'https://barnstormers.s3.amazonaws.com/media/listing_images/medium/medium_image_1906418_2_1715374858.jpeg?7353'
        },
        {
            id:8,
            title: 'A hangar just right for the 310',
            description: '310s deffinatly need a home',
            imgUrl: 'https://barnstormers.s3.amazonaws.com/media/listing_images/medium/medium_image_1915305_2_1719096553.jpeg?9334'
        },
        {
            id:9,
            title: '310s need room dont you agree',
            description: 'What a beautiful space for a 310',
            imgUrl: 'https://barnstormers.s3.amazonaws.com/media/listing_images/medium/medium_image_1801240_1_1675036792.jpeg?4414'
        },
        {
            id:10,
            title: 'Dude a F-18 Hangar? Really?',
            description: 'F-18s need a home too',
            imgUrl: 'https://images.pexels.com/photos/72593/hangar-jet-aircraft-fighter-72593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
    ];

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

    const [cities, setCities] = useState(cities1);
    const [states, setStates] = useState(statesArray);
    const [isDetailedView, setIsDetailedViews] = useState(false)
    const [hangarDetails, setHangarDetails] = useState({} as HangarDetails)
    const [hangarDetailsArray, setHangarDetailsArray] = useState([] as HangarDetails[])
    const [hangarId, setHangarId] = useState(0)

    // useEffect(())


        useEffect(() => {
            //uncomment when api ready
            fetch('http://localhost:8001/hangar/details/all')
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setHangarDetailsArray(json)
            })
            .catch(error => console.error(error));

            // setHangarDetails(hangarDetailSetter(hangarId));

        }, [hangarDetails])

    // function hangarDetailSetter(id: number): HangarDetails {
    //     const listingToConvert =  avalibleListings[id]
    //     const hangarDetails = { 
    //         location: 'Atlanta, GA',
    //         image: listingToConvert.imgUrl,
    //         title: listingToConvert.title,
    //         hangarDesc: listingToConvert.description
    //     } as HangarDetails
    //     return hangarDetails
    // }

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

            {/* figure out how to conditionally display */}
            <GridList
                isDetailedView={isDetailedView}
                setIsDetailedViews={setIsDetailedViews}
                shouldShow={isDetailedView}
                avalibleListings={hangarDetailsArray}
                setHangarId={setHangarId}
            />
            <DetailedView
                isDetailedView={isDetailedView}
                setIsDetailedViews={setIsDetailedViews}
                shouldShow={isDetailedView}
                hangarDetail={hangarDetails}
            />
        </div>
    );
}

export interface HangerListView {
    id: number,
    title: string;
    description: string;
    imgUrl: string;
}