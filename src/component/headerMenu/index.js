import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import {Link} from "react-router-dom";
import * as CONSTANTS from '../../constant/actions';
import * as Routes from '../../routes';


const HeaderMenu = (props) => {

    return <Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{vertical: "top", horizontal: "right"}}
        id={props.id}
        keepMounted
        transformOrigin={{vertical: "top", horizontal: "right"}}
        open={props.open}
        onClose={props.onClose}
    >
        <MenuItem onClick={props.onClose} component={Link} to={Routes.PROFILE}>{CONSTANTS.PROFILE}</MenuItem>
        <MenuItem onClick={props.onClose} component={Link} to={Routes.MY_ACCOUNT}>{CONSTANTS.MY_ACCOUNT}</MenuItem>
        <MenuItem onClick={props.onClose} component={Link} to={Routes.SIGN_IN}>{CONSTANTS.SIGN_IN}</MenuItem>
        <MenuItem onClick={props.onClose} component={Link} to={Routes.SIGN_UP}>{CONSTANTS.SIGN_UP}</MenuItem>
    </Menu>;
}
export default HeaderMenu;