import React from 'react';
import { NavLink } from 'react-router-dom';
import {TextField, Grid, Typography} from '@material-ui/core';
import { Button } from 'react-bootstrap';
import '../styles/Payment.css';

function PaymentTemplate() {
  return (
    <div className="payment" >
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={10} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <br></br>
        <Grid item xs={10} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <br></br>
        <Grid item xs={5} md={5}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <br></br>
        <Grid item xs={5} md={5}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <br></br>
      </Grid>
      <br></br>
    </React.Fragment>
    <br></br>
    <br></br>
    

    <NavLink to="/checkout"><Button className="but" variant="warning" >Checkout</Button></NavLink> 
    </div>
  );
}

export default PaymentTemplate;