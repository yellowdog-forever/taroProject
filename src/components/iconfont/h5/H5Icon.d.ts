/* eslint-disable */

import { CSSProperties, DOMAttributes, FunctionComponent } from 'react';

interface Props extends DOMAttributes<SVGElement> {
  name: 'books' | 'personal' | 'readBook';
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

export declare const H5Icon: FunctionComponent<Props>;

export default H5Icon;
