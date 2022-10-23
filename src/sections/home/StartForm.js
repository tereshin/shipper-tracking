import { m } from 'framer-motion';
import Lottie from 'react-lottie-player'
import { Link as RouterLink, BrowserRouter as Router, Switch,
    Route } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, TextField } from '@mui/material';
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
import lottieJson from '../../animations/1.json';

// ----------------------------------------------------------------------


const RootStyle = styled(m.div)(({ theme }) => ({
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100vh - 150px)',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {

    },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {

    },
}));


const ValidationTextField = styled(FilledInput)({
    '& .MuiFormControl-root': {
      width: '100%',
    },
    '.MuiFilledInput-root': {
        backgroundColor: '#EEF0F6',
        borderRadius: '16px',
        '&:after': {
            display: 'none',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiFilledInput-input': {
        paddingLeft: '15px',
        paddingRight: '15px',
    }
});

const handleSubmit = (event) => {
    if(event.target[0].value === '') {
        event.preventDefault();
    }
};

// ----------------------------------------------------------------------

function DefaultIcon() {
    return (<SvgIcon width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<rect x="4.24316" y="8.75763" width="5.99986" height="5.99995" transform="rotate(45 4.24316 8.75763)" fill="white"/>\n' +
        '<rect x="12.7275" y="17.2427" width="5.99987" height="5.99995" transform="rotate(45 12.7275 17.2427)" fill="#FF5C5C"/>\n' +
        '<rect x="16.9697" y="13.0003" width="5.99987" height="5.99995" transform="rotate(45 16.9697 13.0003)" fill="#FF5C5C"/>\n' +
        '<rect x="12.7275" y="0.272461" width="5.99986" height="5.99995" transform="rotate(45 12.7275 0.272461)" fill="#FF5C5C"/>\n' +
        '<rect x="16.9697" y="4.51489" width="5.99987" height="5.99995" transform="rotate(45 16.9697 4.51489)" fill="#FF5C5C"/>\n' +
        '<rect x="21.2119" y="8.75763" width="5.99987" height="5.99995" transform="rotate(45 21.2119 8.75763)" fill="#FF5C5C"/>\n' +
        '</SvgIcon>);
}
export default function StartForm() {
    return (
        <MotionContainer>
            <RootStyle>

                <Container sx={{ overflow: 'hidden' }}>
                    <ContentStyle sx={{ width: '100%', maxWidth: '682px', margin: 'auto' }}>

                        <m.div variants={varFade().inRight} sx={{ overflow: 'hidden'}}>
                            <Container sx={{ transform: { md:'scale(1)', xs: 'scale(2)' } }}>
                                <Lottie
                                    loop
                                    animationData={lottieJson}
                                    play
                                    style={{ width: '100%'}}
                                />
                            </Container>
                        </m.div>

                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                            method="GET"
                            action="/tracking"
                        >
                            <Stack spacing={2.5} alignItems="center"  direction="row" sx={{ borderRadius: '16px', boxShadow: '0px 2px 24px rgba(64, 89, 140, 0.1)', p: { md: '30px 30px', xs: '20px 15px' }, width: '100%'}}>
                                <m.div variants={varFade().inRight} className="FieldTrackNumber">
                                    <FormControl variant="filled" sx={{ 'width': '100%' }}>
                                        <InputLabel htmlFor="TrackingNumber" sx={{ left: '5px' }}>Tracking number</InputLabel>
                                        <ValidationTextField id="TrackingNumber" name="TrackingNumber"  />
                                    </FormControl>
                                </m.div>
                                <Button
                                    sx={{ borderRadius: '16px', height: { md: '48px', xs: '54px' }, p: { md: '27px', xs: '17px 15px' }, minWidth:  { md: '169px', xs: 'initial' }}}
                                    size="large"
                                    variant="contained"
                                    type="submit"
                                    endIcon={<DefaultIcon />}
                                >
                                    TRACK
                                </Button>
                            </Stack>
                        </Box>
                    </ContentStyle>
                </Container>
            </RootStyle>
        </MotionContainer>
    );
}
