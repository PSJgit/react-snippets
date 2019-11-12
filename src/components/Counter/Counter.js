import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));

const Counter = (props) => {

  const classes = useStyles();
  const [ count, setCount ] = useState(props.count);

  useEffect(() => {
    
  }, []);

  return (
    <>
      <p>The current count is {count}</p>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => {setCount(count + 1)}}>+1</Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => {setCount(count - 1)}}>-1</Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => {setCount(0)}}>reset</Button>
    </>
  )
}

Counter.defaultProps = {
  count: 0
}

export default Counter;