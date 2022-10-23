// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import { TrackingPreloader, TrackingDetails } from '../sections/tracking';

// ----------------------------------------------------------------------
const RootStyle = styled('div')(() => ({
    height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function TrackingPage() {
    return (
        <Page title="Shipper Tracking">
            <RootStyle>
                <TrackingDetails />
                <TrackingPreloader />
            </RootStyle>
        </Page>
    );
}
