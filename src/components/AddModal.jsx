import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';

import { openModel, addNewCategory } from '../redux/actions';

export default function AddModal() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleClose = () => {
    dispatch(openModel(''));
  };

  const handleAdd = () => {
    dispatch(addNewCategory(name));
    dispatch(openModel(''));
    setName('');
  };

  return (
    <div>
      <Dialog
        open={modal === 'ADD'}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">ADD</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Category Name</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
