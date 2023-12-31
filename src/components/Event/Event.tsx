import React from 'react';
import { useRef } from 'react';
import styles from "./Event.module.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Flippy, { FrontSide, BackSide } from "react-flippy";

interface Props {
    title: string;
    date: string;
    location: string;
    description: any;
    image: string;
    link: string;
}

const Event:React.FC<Props> = ({title, date, location, description, image, link}) => {

    const ref = useRef<Flippy>()
    return (
        <div>
            <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal"
                ref={ref}
            >
                <FrontSide style={{boxShadow: "none" , width: "500px", height: "450px"}}>
                    <div className={styles.eventCard}>
                        <Card sx={{ width: {xs: 350, sm: 500, md: 500, lg: 500}, height: {xs: 400, sm: 450, md: 450, lg: 450} }}>
                            <CardMedia
                                sx={{ height: {xs: 200, sm: 275, md: 275, lg: 275} }}
                                image={image}
                                title="event card"
                            />
                            <CardContent sx={{margin: "10px"}}>
                                <Typography gutterBottom={true} variant="h5" component="div" align="center">{title}</Typography>
                                <div className={styles.cardContent}><b>Date</b> {date}</div>
                                <div className={styles.cardContent}><b>Location</b> {location}</div>
                            </CardContent>
                        </Card>
                    </div>
                </FrontSide>
                <BackSide style={{boxShadow: "none", width: "500px", height: "450px"}}>
                    <div className={styles.eventCard}>
                        <Card sx={{ width: {xs: 350, sm: 500, md: 500, lg: 500}, height: {xs: 400, sm: 450, md: 450, lg: 450}, overflow: "auto" }}>
                            <CardContent sx={{margin: "10px"}}>
                                <Typography gutterBottom={true} variant="h5" component="div" align="center">{title}</Typography>
                                <div className={styles.cardContent}><b>Date</b> {date}</div>
                                <div className={styles.cardContent}><b>Location</b> {location}</div>
                                <br/>
                                <div className={styles.cardContent}>{description}</div>
                            </CardContent>
                        </Card>
                    </div>
                </BackSide>
            </Flippy>
            <div className={styles.buttonContainer}>
                {link === "/" ?
                <Button variant="contained" disabled
                        endIcon={<FacebookIcon/>}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        sx={{width: "200px"}}>
                    Facebook Link
                </Button>
                :
                <Button variant="contained"
                        endIcon={<FacebookIcon/>}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        sx={{width: "200px"}}>
                    Facebook Link
                </Button>}
            </div>
        </div>
    )
}

export default Event;