import React, { useState } from 'react';

const AsyncContainer = () => {
  const [ resource, setResource ] = useState('posts');

  return (
    <>
      <button onClick={() => {setResource('posts')}}>Posts</button>
      <button onClick={() => {setResource('todos')}}>Todos</button>

      <ResourceList resource={resource}/>
    </>
  )
}

const ResourceList = () => {

  return (
    <>

    </>
  )
}

export default AsyncContainer;