import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';

import { openModel, editCategory, unselectCategory } from '../redux/actions';

export default function EditModal() {
  const modal = useSelector((state) => state.modal);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  const [name, setName] = useState('');

  useEffect(() => {
    setName(category[selectedCategory]);
  }, [selectedCategory, category]);

  const handleClose = () => {
    dispatch(openModel(''));
  };

  const handleUpdate = () => {
    dispatch(
      editCategory({
        index: selectedCategory,
        new: name,
      }),
    );
    dispatch(openModel(''));
    dispatch(unselectCategory());
  };

  return (
    <div>
      <Dialog
        open={modal === 'EDIT'}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">EDIT</DialogTitle>
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
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
