import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import ModalDialog from './ModalDialog';

const App = () => {

  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div className="App">
      <Button variant="contained" color="primary" onClick={handleOpen}>Sign Up</Button>

      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  )
}
export default App;