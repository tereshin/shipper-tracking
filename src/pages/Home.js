// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import { StartForm } from '../sections/home';

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

export default function HomePage() {
  return (
    <Page title="Shipper Tracking">
      <RootStyle>
        <StartForm />
      </RootStyle>
    </Page>
  );
}
