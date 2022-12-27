import { createGlobalStyle } from 'styled-components';

import OpenSansRegularWoff from './OpenSans/OpenSans-Regular.woff';
import OpenSansRegularWoff2 from './OpenSans/OpenSans-Regular.woff2';
import OpenSansSemiBoldWoff from './OpenSans/OpenSans-SemiBold.woff';
import OpenSansSemiBoldWoff2 from './OpenSans/OpenSans-SemiBold.woff2';




 const fonts = createGlobalStyle`
 /* open-sans-regular - latin_cyrillic */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'),
          local('OpenSans-Regular'),
          url(${OpenSansRegularWoff2}) format('woff2'),
          url(${OpenSansRegularWoff}) format('woff');
  }

  /* open-sans-600 - latin_cyrillic */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Open Sans SemiBold'),
          local('OpenSans-SemiBold'),
          url(${OpenSansSemiBoldWoff2}) format('woff2'),
          url(${OpenSansSemiBoldWoff}) format('woff');
  }
`;

export default fonts;