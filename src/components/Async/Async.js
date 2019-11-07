import React, { useState } from 'react';
import useResources from './useResources';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* Main component
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));

const Async = () => {

  const [ resourceType, setResourceType ] = useState('posts');
  const classes = useStyles();

  return (
    <>
    <Button variant="contained" color="primary" className={classes.button} onClick={() => {setResourceType('posts')}}>
      Posts
    </Button>

    <Button variant="contained" color="primary" className={classes.button} onClick={() => {setResourceType('todos')}}>
      Todos
    </Button>

    <ResourceList resourceType={resourceType}/>
    </>
  )
}

/* Resource component
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const ResourceList = ({ resourceType }) => {

  // useResources hook
  const resources = useResources(resourceType);

  return (
    <div>
      {`${resourceType} available: ${resources.length}`}
      <ul>
        {resources.map(resource => (
          <li key={resource.id}>{resource.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Async;