import { useLocation, Outlet } from 'react-router-dom';
// @mui
import { Box, Link, Container, Typography, Stack } from '@mui/material';
// components
import Logo from '../../components/Logo';
//

import SecondFooter from './SecondFooter';
import SecondHeader from './SecondHeader';

export default function SecondLayout() {
    const { pathname } = useLocation();

    const isHome = pathname === '/';

    return (
        <Stack sx={{ minHeight: 1 }}>
            <SecondHeader />

            <Outlet />

        </Stack>
    );
}