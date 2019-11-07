import React, { useState } from 'react';
import useResources from './useResources'

/* Main component
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const Async = () => {
  const [ resourceType, setResourceType ] = useState('posts');

  return (
    <>
      <button onClick={() => {setResourceType('posts')}}>Posts</button>
      <button onClick={() => {setResourceType('todos')}}>Todos</button>

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