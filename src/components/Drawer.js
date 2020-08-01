import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

export default function SideDrawer() {
  const open = useSelector(store => store.drawer);
  console.log(open);
  return (
    <Drawer
        variant="permanent"
        open={true}
        anchor="left"
      >
        sdfoiajdf
    </Drawer>
  )
}