import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';

import { openModel } from '../redux/actions';

export default function ViewModal() {
  const modal = useSelector((state) => state.modal);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openModel(''));
  };

  return (
    <div>
      <Dialog
        open={modal === 'VIEW'}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">VIEW</DialogTitle>
        <DialogContent>
          <DialogContentText>Category Name</DialogContentText>
          <p>{category[selectedCategory]}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
