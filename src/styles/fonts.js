import { css } from 'styled-components';

import BebasNeueRegularWoff from '@fonts/BebasNeue/bebas-neue-regular.woff';
import BebasNeueRegularWoff2 from '@fonts/BebasNeue/bebas-neue-regular.woff2';

import RobotoRegularWoff from '@fonts/Roboto/roboto-regular.woff';
import RobotoRegularWoff2 from '@fonts/Roboto/roboto-regular.woff2';
import RobotoBoldrWoff from '@fonts/Roboto/roboto-700.woff';
import RobotoBoldWoff2 from '@fonts/Roboto/roboto-700.woff2';

import SpaceMonoRegularWoff from '@fonts/SpaceMono/space-mono-regular.woff';
import SpaceMonoRegularWoff2 from '@fonts/SpaceMono/space-mono-regular.woff2';
import SpaceMonoBoldWoff from '@fonts/SpaceMono/space-mono-700.woff';
import SpaceMonoBoldWoff2 from '@fonts/SpaceMono/space-mono-700.woff2';
import SpaceMonoItalicWoff from '@fonts/SpaceMono/space-mono-italic.woff';
import SpaceMonoItalicWoff2 from '@fonts/SpaceMono/space-mono-italic.woff2';

const bebasNeueRegular = {
  400: [BebasNeueRegularWoff, BebasNeueRegularWoff2],
};

const robotoRegular = {
  400: [RobotoRegularWoff, RobotoRegularWoff2],
  700: [RobotoBoldrWoff, RobotoBoldWoff2]
};

const spaceMonoRegular = {
  400: [SpaceMonoRegularWoff, SpaceMonoRegularWoff2],
  700: [SpaceMonoBoldWoff, SpaceMonoBoldWoff2]
};

const spaceMonoItalic = {
  400: [SpaceMonoItalicWoff, SpaceMonoItalicWoff2]
};

const roboto = {
  name: 'Roboto',
  normal: robotoRegular,
};

const spaceMono = {
  name: 'SpaceMono',
  normal: spaceMonoRegular,
  italic: spaceMonoItalic
};

const bebasNeue = {
  name: 'BebasNeue',
  normal: bebasNeueRegular
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  Object.entries(family[style]).forEach(([weight, hrefs]) => {
    const [woff, woff2] = hrefs;

    styles += `
      @font-face {
        font-family: '${family.name}';
        font-style: ${style};
        font-weight: ${weight};
        src: url(${woff2}) format('woff2'), url(${woff}) format('woff');
        font-display: swap;
      }
    `
  });

  return styles;
}

const robotoFonts = createFontFaces(roboto);
const spaceMonoRegularFonts = createFontFaces(spaceMono);
const spaceMonoItalicFonts = createFontFaces(spaceMono, 'italic');
const bebasNeueFonts = createFontFaces(bebasNeue);

const Fonts = css`
  ${robotoFonts + spaceMonoRegularFonts + spaceMonoItalicFonts + bebasNeueFonts}
`;

export default Fonts;