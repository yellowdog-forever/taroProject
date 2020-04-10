/* eslint-disable */

import Iconbooks from './Iconbooks';
import Iconpersonal from './Iconpersonal';
import IconreadBook from './IconreadBook';

export const H5Icon = ({ name, ...rest }) => {
  switch (name) {
    case 'books':
      return <Iconbooks {...rest} />;
    case 'personal':
      return <Iconpersonal {...rest} />;
    case 'readBook':
      return <IconreadBook {...rest} />;

  }

  return null;
};

export default H5Icon;
