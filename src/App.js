import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ModalDialog from './ModalDialog';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

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

      <br/>

      <nav>
        <ul>
          <li><a href="/firstPage">1st</a></li>
          <li><a href="/secondPage">2nd</a></li>
          <li><a href="/thirdPage">3rd</a></li>
        </ul>
      </nav>

      <BrowserRouter>
        <Switch>
          <Route path="/firstPage">
            <FirstPage />
          </Route>

          <Route exact path="/secondPage">
            <SecondPage />
          </Route>

          <Route path="/thirdPage">
            <ThirdPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;