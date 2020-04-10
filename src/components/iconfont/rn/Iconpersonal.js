/* eslint-disable */

import { Svg, Path } from 'react-native-svg/lib/commonjs';
import { getIconColor } from './helper';

export const Iconpersonal = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M929.024 816.2816a452.9152 452.9152 0 0 0-240.2304-239.4112l-1.4336-0.5632a297.728 297.728 0 1 0-348.672 0c-0.512 0-0.9728 0.3584-1.4336 0.6144a449.3824 449.3824 0 0 0-275.712 404.48 9.5744 9.5744 0 0 0 9.6256 9.8304H143.36a9.6256 9.6256 0 0 0 9.6256-9.3184 359.7312 359.7312 0 0 1 360.192-349.5936 359.7312 359.7312 0 0 1 360.192 349.5936 9.472 9.472 0 0 0 9.6256 9.3184h71.9872a9.5744 9.5744 0 0 0 9.6256-9.8304 445.44 445.44 0 0 0-35.584-165.12z m-416-274.688A206.2848 206.2848 0 1 1 658.9952 481.28a205.4144 205.4144 0 0 1-145.9712 60.3136z"
        fill={getIconColor(color, 0, '#232632')}
      />
    </Svg>
  );
};

Iconpersonal.defaultProps = {
  size: 18,
};

export default Iconpersonal;
