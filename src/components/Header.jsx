import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import { openModel, unselectCategory } from '../redux/actions';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const dispatch = useDispatch();
  let title = '';
  if (selectedCategory === -1) title = 'Categories';
  if (selectedCategory !== -1) title = 'Category';

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ cursor: 'pointer' }}
            variant="h6"
            className={classes.title}
            onClick={() => {
              dispatch(unselectCategory());
            }}
          >
            {title}
          </Typography>
          {selectedCategory === -1 && (
            <Button color="inherit" onClick={() => dispatch(openModel('ADD'))}>
              Add
            </Button>
          )}
          {selectedCategory !== -1 && (
            <>
              <Button color="inherit" onClick={() => dispatch(openModel('EDIT'))}>
                Edit
              </Button>
              <Button color="inherit" onClick={() => dispatch(openModel('VIEW'))}>
                View
              </Button>
              <Button color="inherit" onClick={() => dispatch(openModel('DELETE'))}>
                Delete
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
