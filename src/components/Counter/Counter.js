import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: 200,
    display: 'block',
  },
}));

const Counter = (props) => {

  const classes = useStyles();
  const [ count, setCount ] = useState(props.count);
  const [ text, setText ] = useState('');

  useEffect(() => {
    
  }, []);

  return (
    <>
      <p>The current {text || 'count'} is {count}</p>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => {setCount(count - 1)}}>-1</Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => {setCount(0)}}>reset</Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => {setCount(count + 1)}}>+1</Button>

      <TextField id="counter-input" className={classes.textField} label="counter" value={text} onChange={(e) => setText(e.target.value)}/>
    </>
  )
}

Counter.defaultProps = {
  count: 0
}

export default Counter;