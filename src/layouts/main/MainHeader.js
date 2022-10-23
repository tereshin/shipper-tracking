import { useLocation } from 'react-router-dom';
import { m } from 'framer-motion';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Stack, TextField } from '@mui/material';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';

// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import { MotionContainer, varFade } from '../../components/animate';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: 'inherit !important',
  },
  [theme.breakpoints.up('xs')]: {
    padding: '20px 0',
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

const ValidationTextField = styled(FilledInput)({
  '& .MuiFilledInput-input': {
    paddingLeft: '15px',
    paddingRight: '15px',
    borderRadius: '16px',
    '&:hover': {
      backgroundColor: '#EEF0F6',
    },
    '&:focus': {
      backgroundColor: '#EEF0F6',
    },
    '&:active': {
      backgroundColor: '#EEF0F6',
    },
  }
});
const StylizedFormControl = styled(FormControl)({
  width: '100%',
  backgroundColor: '#EEF0F6 !important',
  borderRadius: '16px',
  '&:hover': {
    backgroundColor: '#EEF0F6',
  },
  '& .MuiFilledInput-root': {
    backgroundColor: '#EEF0F6 !important',
    borderRadius: '16px',
    '&:after': {
      display: 'none',
    },
    '&:before': {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: '#EEF0F6 !important',
    },
  },
})
const SubmitButton = styled(Button)({
  borderRadius: '16px',
  height: '52px',
  backgroundColor: 'transparent',
  padding: '10px 25px',
  '&:hover': {
    backgroundColor: '#EEF0F6',
  },
});

function DefaultIcon() {
  return (<SvgIcon width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<rect x="4.24316" y="8.75763" width="5.99986" height="5.99995" transform="rotate(45 4.24316 8.75763)" fill="#284492"/>\n' +
    '<rect x="12.7275" y="17.2427" width="5.99987" height="5.99995" transform="rotate(45 12.7275 17.2427)" fill="#FF5C5C"/>\n' +
    '<rect x="16.9697" y="13.0003" width="5.99987" height="5.99995" transform="rotate(45 16.9697 13.0003)" fill="#FF5C5C"/>\n' +
    '<rect x="12.7275" y="0.272461" width="5.99986" height="5.99995" transform="rotate(45 12.7275 0.272461)" fill="#FF5C5C"/>\n' +
    '<rect x="16.9697" y="4.51489" width="5.99987" height="5.99995" transform="rotate(45 16.9697 4.51489)" fill="#FF5C5C"/>\n' +
    '<rect x="21.2119" y="8.75763" width="5.99987" height="5.99995" transform="rotate(45 21.2119 8.75763)" fill="#FF5C5C"/>\n' +
    '</SvgIcon>);
}

const handleSubmit = (event) => {
  if(event.target[0].value === '') {
    event.preventDefault();
  }
};

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {md: 'row', xs: 'column'},
            gap: '10px'
          }}
        >
          <Logo />


          <Box sx={{ flexGrow: 1 }} />

          {isDesktop === '123' && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}
          <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              action="/tracking"
          >
            <Stack alignItems="center"  direction="row" sx={{ borderRadius: '16px', backgroundColor: '#EEF0F6'}}>
              <m.div variants={varFade().inRight} className="FieldTrackNumber">
                <StylizedFormControl variant="filled">
                  <InputLabel htmlFor="TrackingNumber" sx={{ left: '5px' }}>Tracking number</InputLabel>
                  <ValidationTextField id="TrackingNumber"  name="TrackingNumber" />
                </StylizedFormControl>
              </m.div>
              <SubmitButton
                  size="medium"
                  type="submit"
                  endIcon={<DefaultIcon />}
              >
                TRACK
              </SubmitButton>
            </Stack>
          </Box>
          {isDesktop === '123' && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
