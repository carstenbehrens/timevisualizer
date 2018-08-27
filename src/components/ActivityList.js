import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tableCell: {
    fontSize: 16,
  },
});

const ActivityList = (props) => {
  const { isFetching, filteredList, classes } = props;
  if (isFetching === true) {
    return null;
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Activity:</CustomTableCell>
            <CustomTableCell>Time:</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredList.map(n => (
            <TableRow key={n.name}>
              <TableCell component="th" scope="row" className={classes.tableCell}>
                {n.name}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {moment.duration(n.time, 'seconds').format('hh:mm:ss', { trim: false })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

ActivityList.propTypes = {
  classes: PropTypes.object.isRequired,
  filteredList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ActivityList);
