/* eslint-disable */

import { Svg, Path } from 'react-native-svg/lib/commonjs';
import { getIconColor } from './helper';

export const Iconbooks = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1152 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM192 320H64V256h128v64zM544 128h-192c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32v-704c0-17.6-14.4-32-32-32zM512 320H384V256h128v64z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M765.056 177.472l-171.456 86.4a32.128 32.128 0 0 0-14.208 42.944l288 571.52a32.128 32.128 0 0 0 42.944 14.208l171.456-86.4a32.128 32.128 0 0 0 14.208-42.944l-288-571.52a32.128 32.128 0 0 0-42.944-14.208z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M928 864a32 32 0 1 1-64 0 32 32 0 0 1 64 0z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Iconbooks.defaultProps = {
  size: 18,
};

export default Iconbooks;
