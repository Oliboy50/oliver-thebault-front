import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';

const styles = {
  iconButton: {
    iconStyle: {
      fill: 'white',
      color: 'white',
    },
  },
};

const IconLink = (props) => {
  return (
    <IconButton
      iconClassName={props.iconClassName}
      iconStyle={styles.iconButton.iconStyle}
      linkButton={true}
      href={props.href}
      tooltip={props.tooltip}
      touch={true}
    />
  );
};

IconLink.propTypes = {
  iconClassName: PropTypes.string,
  href: PropTypes.string,
  tooltip: PropTypes.string,
};

export default IconLink;
