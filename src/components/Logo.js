import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ height: { md: '51px', xs: '35px'}, ...sx }}>
      <svg height="100%"  viewBox="0 0 217 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="21.0381" width="10.2561" height="10.5192" fill="#284492"/>
        <rect x="20.6021" width="10.0228" height="31.7388" fill="#F05756"/>
        <rect y="1.52588e-05" width="30.6251" height="10.5796" fill="#F05756"/>
        <path d="M38.729 9.46284C38.729 8.15712 38.9724 6.93208 39.4591 5.78774C39.9458 4.64339 40.6042 3.64576 41.4345 2.79484C42.2791 1.92925 43.2596 1.24704 44.3762 0.748225C45.4927 0.249408 46.688 0 47.962 0H62.0907V6.3159H47.962C47.5326 6.3159 47.1318 6.39659 46.7596 6.55797C46.3874 6.71935 46.0582 6.94675 45.7719 7.24017C45.4999 7.51892 45.2852 7.84902 45.1277 8.23047C44.9702 8.61192 44.8915 9.02271 44.8915 9.46284C44.8915 9.90297 44.9702 10.3211 45.1277 10.7172C45.2852 11.0987 45.4999 11.4361 45.7719 11.7295C46.0582 12.0083 46.3874 12.2283 46.7596 12.3897C47.1318 12.5511 47.5326 12.6318 47.962 12.6318H54.1245C55.3985 12.6318 56.5938 12.8812 57.7104 13.38C58.8412 13.8642 59.8218 14.539 60.6521 15.4046C61.4966 16.2555 62.1551 17.2605 62.6275 18.4195C63.1142 19.5639 63.3575 20.7889 63.3575 22.0946C63.3575 23.4004 63.1142 24.6254 62.6275 25.7697C62.1551 26.9141 61.4966 27.9191 60.6521 28.7846C59.8218 29.6356 58.8412 30.3104 57.7104 30.8093C56.5938 31.3081 55.3985 31.5575 54.1245 31.5575H40.4468V25.2416H54.1245C54.554 25.2416 54.9548 25.1609 55.327 24.9995C55.6992 24.8381 56.0212 24.6181 56.2932 24.3393C56.5795 24.0459 56.8014 23.7085 56.9588 23.327C57.1163 22.9456 57.195 22.5348 57.195 22.0946C57.195 21.6545 57.1163 21.2437 56.9588 20.8623C56.8014 20.4808 56.5795 20.1507 56.2932 19.872C56.0212 19.5785 55.6992 19.3511 55.327 19.1898C54.9548 19.0284 54.554 18.9477 54.1245 18.9477H47.962C46.688 18.9477 45.4927 18.6983 44.3762 18.1995C43.2596 17.7006 42.2791 17.0258 41.4345 16.1749C40.6042 15.3093 39.9458 14.3043 39.4591 13.16C38.9724 12.0009 38.729 10.7686 38.729 9.46284Z" fill="#284492"/>
        <path d="M73.5783 31.5575H67.4158V0H73.5783V12.6318H85.8818V0H92.0443V31.5575H85.8818V18.9477H73.5783V31.5575Z" fill="#284492"/>
        <path d="M103.94 31.5575H97.7774V0H103.94V31.5575Z" fill="#284492"/>
        <path d="M115.835 6.3159V18.9477H121.998C122.843 18.9477 123.637 18.7863 124.381 18.4635C125.126 18.1261 125.777 17.6713 126.335 17.0991C126.894 16.527 127.33 15.8594 127.645 15.0965C127.974 14.319 128.139 13.4974 128.139 12.6318C128.139 11.7662 127.974 10.952 127.645 10.1891C127.33 9.41149 126.894 8.73662 126.335 8.16445C125.777 7.59228 125.126 7.14481 124.381 6.82205C123.637 6.48461 122.843 6.3159 121.998 6.3159H115.835ZM115.835 31.5575H109.673V0H121.998C123.129 0 124.217 0.154046 125.262 0.462139C126.307 0.75556 127.28 1.18102 128.182 1.73852C129.098 2.28135 129.928 2.94155 130.673 3.71912C131.431 4.48201 132.076 5.33293 132.605 6.27188C133.149 7.21083 133.564 8.2158 133.851 9.28679C134.151 10.3578 134.301 11.4728 134.301 12.6318C134.301 14.363 133.979 15.9988 133.335 17.5393C132.691 19.0651 131.811 20.4001 130.694 21.5445C129.578 22.6888 128.268 23.5911 126.765 24.2513C125.276 24.9115 123.687 25.2416 121.998 25.2416H115.835V31.5575Z" fill="#284492"/>
        <path d="M144.093 6.3159V18.9477H150.255C151.1 18.9477 151.894 18.7863 152.639 18.4635C153.383 18.1261 154.034 17.6713 154.593 17.0991C155.151 16.527 155.588 15.8594 155.902 15.0965C156.232 14.319 156.396 13.4974 156.396 12.6318C156.396 11.7662 156.232 10.952 155.902 10.1891C155.588 9.41149 155.151 8.73662 154.593 8.16445C154.034 7.59228 153.383 7.14481 152.639 6.82205C151.894 6.48461 151.1 6.3159 150.255 6.3159H144.093ZM144.093 31.5575H137.93V0H150.255C151.386 0 152.474 0.154046 153.519 0.462139C154.564 0.75556 155.537 1.18102 156.439 1.73852C157.355 2.28135 158.186 2.94155 158.93 3.71912C159.689 4.48201 160.333 5.33293 160.863 6.27188C161.406 7.21083 161.822 8.2158 162.108 9.28679C162.409 10.3578 162.559 11.4728 162.559 12.6318C162.559 14.363 162.237 15.9988 161.593 17.5393C160.948 19.0651 160.068 20.4001 158.952 21.5445C157.835 22.6888 156.525 23.5911 155.022 24.2513C153.533 24.9115 151.944 25.2416 150.255 25.2416H144.093V31.5575Z" fill="#284492"/>
        <path d="M187.295 31.5575H166.188V0H187.295V6.3159H172.35V12.6318H182.463V18.9477H172.35V25.2416H187.295V31.5575Z" fill="#284492"/>
        <path d="M197.773 6.3159V18.9477H203.936C204.78 18.9477 205.575 18.7863 206.319 18.4635C207.063 18.1261 207.715 17.6713 208.273 17.0991C208.831 16.527 209.268 15.8594 209.583 15.0965C209.912 14.319 210.077 13.4974 210.077 12.6318C210.077 11.7662 209.912 10.952 209.583 10.1891C209.268 9.41149 208.831 8.73662 208.273 8.16445C207.715 7.59228 207.063 7.14481 206.319 6.82205C205.575 6.48461 204.78 6.3159 203.936 6.3159H197.773ZM197.773 31.5575H191.611V0H203.936C205.066 0 206.154 0.154046 207.199 0.462139C208.244 0.75556 209.218 1.18102 210.12 1.73852C211.036 2.28135 211.866 2.94155 212.61 3.71912C213.369 4.48201 214.013 5.33293 214.543 6.27188C215.087 7.21083 215.502 8.2158 215.788 9.28679C216.089 10.3578 216.239 11.4728 216.239 12.6318C216.239 13.7175 216.103 14.7738 215.831 15.8007C215.574 16.8277 215.194 17.8033 214.693 18.7276C214.206 19.6519 213.605 20.5028 212.89 21.2804C212.174 22.058 211.372 22.7328 210.485 23.305L213.899 31.5575H207.35L204.666 25.1976L197.773 25.2416V31.5575Z" fill="#284492"/>
        <path d="M129.247 40.4395H126.271V38.7185H134.142V40.4395H131.151V48.0286H129.247V40.4395ZM143.755 48.0286L141.343 44.7418H139.946V48.0286H138.042V38.7185H141.54C142.189 38.7185 142.767 38.8455 143.275 39.0994C143.783 39.3439 144.178 39.6965 144.46 40.1573C144.752 40.6087 144.897 41.1307 144.897 41.7231C144.897 42.3156 144.752 42.8422 144.46 43.303C144.168 43.7638 143.769 44.1212 143.261 44.3751L145.899 48.0286H143.755ZM139.946 43.0632H141.54C141.982 43.0632 142.325 42.941 142.57 42.6964C142.824 42.4519 142.951 42.1275 142.951 41.7231C142.951 41.3282 142.824 41.0084 142.57 40.7639C142.316 40.5194 141.973 40.3972 141.54 40.3972H139.946V43.0632ZM155.197 46.8154H151.388L150.866 48.0286H148.821L152.982 38.5492H153.617L157.764 48.0286H155.719L155.197 46.8154ZM153.293 42.104L152.051 45.2497H154.534L153.293 42.104ZM165.889 48.1978C164.977 48.1978 164.14 47.9862 163.378 47.5631C162.626 47.1399 162.029 46.5615 161.587 45.828C161.154 45.0851 160.938 44.2669 160.938 43.3735C160.938 42.4802 161.159 41.6667 161.601 40.9332C162.043 40.1903 162.64 39.6072 163.392 39.184C164.154 38.7608 164.991 38.5492 165.903 38.5492C166.787 38.5492 167.587 38.7561 168.301 39.1699C169.025 39.5743 169.594 40.1385 170.008 40.8627L168.569 41.8783C167.911 40.8344 167.022 40.3125 165.903 40.3125C165.33 40.3125 164.812 40.4442 164.352 40.7075C163.9 40.9708 163.543 41.3376 163.279 41.8078C163.026 42.2686 162.899 42.7952 162.899 43.3876C162.899 43.9801 163.026 44.5067 163.279 44.9675C163.543 45.4283 163.9 45.7904 164.352 46.0537C164.812 46.3076 165.33 46.4346 165.903 46.4346C167.022 46.4346 167.911 45.9126 168.569 44.8688L170.008 45.8844C169.604 46.6085 169.039 47.1775 168.315 47.5913C167.591 47.9957 166.782 48.1978 165.889 48.1978ZM180.168 48.0286L176.176 43.1761V48.0286H174.271V38.7185H176.176V43.035L179.73 38.7185H182.001L178.433 43.1055L182.467 48.0286H180.168ZM186.366 38.7185H188.271V48.0286H186.366V38.7185ZM200.975 38.7185V48.1978H200.34L194.952 42.4425V48.0286H193.047V38.5492H193.668L199.071 44.2763V38.7185H200.975ZM210.192 48.1978C209.27 48.1978 208.429 47.9862 207.667 47.5631C206.914 47.1399 206.317 46.5615 205.875 45.828C205.433 45.0851 205.212 44.2669 205.212 43.3735C205.212 42.4708 205.429 41.6526 205.861 40.9191C206.303 40.1856 206.905 39.6072 207.667 39.184C208.429 38.7608 209.27 38.5492 210.192 38.5492C211.01 38.5492 211.753 38.7279 212.421 39.0853C213.098 39.4332 213.662 39.9269 214.113 40.5664L212.759 41.6808C212.101 40.7686 211.236 40.3125 210.164 40.3125C209.571 40.3125 209.049 40.4442 208.598 40.7075C208.146 40.9708 207.794 41.3329 207.54 41.7937C207.295 42.2545 207.173 42.7811 207.173 43.3735C207.173 43.9754 207.3 44.5114 207.554 44.9816C207.817 45.4518 208.184 45.8233 208.654 46.096C209.124 46.3593 209.665 46.491 210.276 46.491C210.812 46.491 211.287 46.3876 211.701 46.1807C212.124 45.9738 212.468 45.6916 212.731 45.3343V44.5726H210.164V42.9221H214.635V45.6728C214.212 46.4252 213.605 47.0364 212.816 47.5066C212.035 47.9674 211.16 48.1978 210.192 48.1978Z" fill="#FF5C5C"/>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}