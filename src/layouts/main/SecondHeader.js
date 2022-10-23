import { useLocation } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@mui/material';
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
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    paddingTop: '30px',
    height: HEADER.MOBILE_HEIGHT,
    transition: theme.transitions.create(['height', 'background-color'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    [theme.breakpoints.up('md')]: {
        height: HEADER.MAIN_DESKTOP_HEIGHT,
    },
}));


// ----------------------------------------------------------------------

export default function SecondHeader() {
    const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

    const theme = useTheme();

    const { pathname } = useLocation();

    const isDesktop = useResponsive('up', 'md');

    const isHome = pathname === '/';

    return (
        <AppBar position="static" sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
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
                        justifyContent: 'center',
                    }}
                >
                    <Logo />

                </Container>
            </ToolbarStyle>


        </AppBar>
    );
}
