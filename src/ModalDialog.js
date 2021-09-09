import React from 'react';
import { Dialog } from '@material-ui/core';
import Form from './Form';

const ModalDialog = ({ open, handleClose }) => {
    return (
      // props received from App.js
      <Dialog open={open} onClose={handleClose}>
        <div></div>
        <Form handleClose={handleClose} />
      </Dialog>
    );
  };
  
  export default ModalDialog;
  