import { m } from 'framer-motion';
import Lottie from 'react-lottie-player'
import React from "react";
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, TextField, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
// routes

// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {

    },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
    zIndex: 10,
    margin: '0 auto',
    textAlign: 'left',
    position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('xs')]: {
        paddingTop: theme.spacing(20),
    },
}));
const DetailsBoxFirst = styled((props) => <m.div {...props} />)(({ theme }) => ({
    padding: '20px 25px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
        width: '55%',
        padding: '24px 40px',
    },
    boxShadow: ' 0px 2px 24px rgba(64, 89, 140, 0.1)',
    borderRadius: '16px'
}));

const DetailsBoxSecond = styled((props) => <m.div {...props} />)(({ theme }) => ({
    padding: '20px 25px',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
        width: '45%',
        padding: '24px 40px',
        paddingBottom: '45px',
    },
    boxShadow: ' 0px 2px 24px rgba(64, 89, 140, 0.1)',
    borderRadius: '16px'
}));

const parcelHistory = [
    {
        name: 'The parcel arrived at the transit airport',
        location: 'Tel Aviv, Israel',
        date: '03.08.2022 13:23:08',
        status: 'ready'
    },
    {
        name: 'The parcel arrived at the transit airport',
        location: 'Tel Aviv, Israel',
        date: '03.08.2022 13:23:08',
        status: 'ready'
    },
    {
        name: 'The parcel arrived at the transit airport',
        location: 'Tel Aviv, Israel',
        date: '03.08.2022 13:23:08',
        status: 'ready'
    },
    {
        name: 'The parcel arrived at the transit airport',
        location: 'Tel Aviv, Israel',
        date: '03.08.2022 13:23:08',
        status: 'current'
    },
    {
        name: 'The parcel arrived at the transit airport',
        location: 'Tel Aviv, Israel',
        date: '03.08.2022 13:23:08',
    },
    {
        name: 'The parcel arrived at the transit airport',
        location: 'Tel Aviv, Israel',
        date: '03.08.2022 13:23:08',
    }
];

const LabelText = styled((props) => <Typography component="div" variant="overline" {...props} />)(({ theme }) => ({
    mb: 2,
    color: '#A8B6D2',
    textTransform: 'inherit',
    fontWeight: 500
}));

const DeliveryStatus = 'Delivered';
function StatusLabel(){
    return <Typography sx={{ p: {md: '4px 16px', xs: '1px 10px'}, fontSize: {md: '14px', xs: '12px'}, fontWeight: 600 }} className={`DeliveryStatus ${DeliveryStatus}`}>{ DeliveryStatus }</Typography>;
};

// ----------------------------------------------------------------------

const handleShown = (isAlertVisible) => {

    if(isAlertVisible){
        return varFade().inUp;
    }
    return varFade().out;
};

export default function TrackingDetails() {
    const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);

    setTimeout(() => {
        setIsAlertVisible(true);
    }, 3500);

    return (
        <MotionContainer variants={handleShown(isAlertVisible)}>
            <RootStyle>
                <Container sx={{ overflow: 'hidden' }}>
                    <ContentStyle sx={{ width: '100%', 'margin': 'auto' }}>
                        <Stack direction={{ md: 'row', xs: 'column'}} sx={{ 'gap': '20px'}}>
                            <DetailsBoxFirst variants={varFade().inUp}>
                                <Stack direction="row" sx={{ gap: '20px', justifyContent: 'space-between', marginBottom: { md:0, xs: '6px'} }}>
                                    <LabelText>Delivery created: 02.08.2022</LabelText>
                                    <StatusLabel/>
                                </Stack>
                                <Stack direction="row" sx={{ marginBottom: {md: '15px', xs: '5px'} }}>
                                    <Typography component="h1" sx={{ color: '#284492', fontSize: {md: '24px', xs: '18px'}, fontWeight: 700, lineHeight: {md: 1.7, xs: 2.5}}}>6594 7786 9475 5577 3567</Typography>
                                    <Box>
                                        <IconButton color="primary" aria-label="Copy number" component="label" onClick={() => {navigator.clipboard.writeText('6594 7786 9475 5577 3567')}}>
                                            <Icon icon="fa6-regular:copy" />
                                        </IconButton>
                                    </Box>
                                </Stack>
                                <Stack direction="column" sx={{ alignItems: 'baseline' }}>
                                    <LabelText sx={{ marginBottom: '16px' }}>Parcel history</LabelText>
                                    <Stack direction="column" className="historyList" sx={{ alignItems: 'baseline', gap: '26px' }}>
                                        {parcelHistory.map((step, stepKey) => {
                                            const HistoryName = () => { return step.name };
                                            const HistoryLocation = () => { return step.location };
                                            const HistoryDate = () => { return step.date };
                                            if(typeof step.status === 'undefined'){
                                                step.status = '';
                                            }
                                            const HistoryStatus = step.status;
                                            // Return the element. Also pass key
                                            return (<m.div key={stepKey} variants={varFade().inUp}  className={`item ${HistoryStatus}`} style={{ position: 'relative' }}>
                                                <m.div className={`status ${HistoryStatus}`}><span/></m.div>
                                                <m.div style={{ paddingLeft: '38px' }}>
                                                    <m.div style={{ fontWeight: 600, color: '#284492' }}><HistoryName/></m.div>
                                                    <LabelText><HistoryLocation/></LabelText>
                                                    <LabelText><HistoryDate/></LabelText>
                                                </m.div>
                                            </m.div>)
                                        })}

                                    </Stack>
                                </Stack>
                            </DetailsBoxFirst>
                            <DetailsBoxSecond>
                                <Stack direction="column" sx={{ gap: '24px' }}>
                                    <Box>
                                        <LabelText sx={{ marginBottom: '5px' }}>Description of the shipment</LabelText>
                                        <Typography sx={{ color: '#284492', fontWeight: 600 }}>clothing</Typography>
                                    </Box>
                                    <m.div style={{ backgroundColor: '#E5E9F3', height: '1px' }} />
                                    <Box>
                                        <LabelText sx={{ marginBottom: '5px' }}>Recipient</LabelText>
                                        <Typography sx={{ color: '#284492', fontWeight: 600 }}>Nechiporuk Maria Viktorovna</Typography>
                                    </Box>
                                    <Box>
                                        <LabelText sx={{ marginBottom: '5px' }}>Sender</LabelText>
                                        <Typography sx={{ color: '#284492', fontWeight: 600 }}>Nechiporuk Maria Viktorovna</Typography>
                                    </Box>
                                    <m.div style={{ backgroundColor: '#E5E9F3', height: '1px' }} />
                                    <Stack direction="row" sx={{ gap: '60px' }}>
                                        <Box>
                                            <LabelText sx={{ marginBottom: '5px' }}>Type</LabelText>
                                            <Typography sx={{ color: '#284492', fontWeight: 600 }}>Package</Typography>
                                        </Box>
                                        <Box>
                                            <LabelText sx={{ marginBottom: '5px' }}>Weight</LabelText>
                                            <Typography sx={{ color: '#284492', fontWeight: 600 }}>5 kg</Typography>
                                        </Box>
                                        <Box>
                                            <LabelText sx={{ marginBottom: '5px' }}>Volume weight</LabelText>
                                            <Typography sx={{ color: '#284492', fontWeight: 600 }}>5 kg</Typography>
                                        </Box>
                                    </Stack>
                                    <m.div style={{ backgroundColor: '#E5E9F3', height: '1px' }} />
                                    <Box>
                                        <LabelText sx={{ marginBottom: '5px' }}>From</LabelText>
                                        <Typography sx={{ color: '#284492', fontWeight: 600 }}>Israel,Tel Aviv, Dizengoff street,12</Typography>
                                    </Box>
                                    <Box>
                                        <LabelText sx={{ marginBottom: '5px' }}>To</LabelText>
                                        <Typography sx={{ color: '#284492', fontWeight: 600 }}>Israel,Tel Aviv, Dizengoff street,12</Typography>
                                    </Box>
                                </Stack>
                            </DetailsBoxSecond>
                        </Stack>
                    </ContentStyle>
                </Container>
            </RootStyle>
        </MotionContainer>
    );
}
