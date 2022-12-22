import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert'


export default function MenuPopupState(props) {
  const handleClick = () => {
    props.removeListings(props.index);
  };
  console.log(props);
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleClick}>Delete</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}