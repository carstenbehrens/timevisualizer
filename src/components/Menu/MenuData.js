import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Timer from '@material-ui/icons/Timer';
import TableChart from '@material-ui/icons/TableChart';
import PieChart from '@material-ui/icons/PieChart';
import { Link } from 'react-router-dom';

const MenuOptions = (
  <div>
    <ListItem button component={Link} to="/timerecorder">
      <ListItemIcon>
        <Timer />
      </ListItemIcon>
      <ListItemText primary="Chronograph" />
    </ListItem>
    <ListItem button component={Link} to="/activitytable">
      <ListItemIcon>
        <TableChart />
      </ListItemIcon>
      <ListItemText primary="Show Summary" />
    </ListItem>
    <ListItem button component={Link} to="/piechart">
      <ListItemIcon>
        <PieChart />
      </ListItemIcon>
      <ListItemText primary="Show Pie Chart" />
    </ListItem>
  </div>
);

export default MenuOptions;
