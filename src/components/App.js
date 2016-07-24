import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {teal500, teal700} from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconLink from './IconLink';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500,
    primary2Color: teal700,
  },
});

const styles = {
  iconMenu: {
    iconStyle: {
      fill: 'white',
      color: 'white',
    },
  },
};

const App = (props) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          title="OLIVER THEBAULT - Développeur Web"
          // @todo REDUCER
          //onTitleTouchTap={iconMenu.open()}
          iconElementLeft={
            <IconMenu
              iconStyle={styles.iconMenu.iconStyle}
              iconButtonElement={<IconButton><FontIcon className="fa fa-bars" /></IconButton>}
            >
              <MenuItem
                primaryText="Accueil"
                leftIcon={<FontIcon className="fa fa-home" />}
                linkButton={true}
                containerElement={<IndexLink to="/" />}
              />
            </IconMenu>
          }
          iconElementRight={
            <div>
              <IconLink
                iconClassName="fa fa-github"
                href="https://github.com/Oliboy50"
                tooltip="GitHub"
              />
              <IconLink
                iconClassName="fa fa-twitter"
                href="https://twitter.com/OliverThebault"
                tooltip="Twitter"
              />
              <IconLink
                iconClassName="fa fa-linkedin-square"
                href="https://www.linkedin.com/in/oliver-th%C3%A9bault-99182498"
                tooltip="LinkedIn"
              />
            </div>
          }
        />
        {props.children}
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element,
};

export default App;
