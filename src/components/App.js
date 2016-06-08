import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {teal500, teal700} from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionHome from 'material-ui/svg-icons/action/home';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500,
    primary2Color: teal700,
  },
});

const App = (props) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          title="Oliver Thébault"
          iconElementLeft={
            <IconMenu
              iconStyle={{fill: "white", color: "white"}}
              iconButtonElement={<IconButton><NavigationMenu/></IconButton>}
            >
              <MenuItem
                primaryText="Home"
                leftIcon={<ActionHome/>}
                linkButton={true}
                containerElement={<IndexLink to="/" />}
              />
            </IconMenu>
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
