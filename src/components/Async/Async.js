import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Async = () => {
  const [ resource, setResource ] = useState('posts');

  return (
    <>
      <button onClick={() => {setResource('posts')}}>Posts</button>
      <button onClick={() => {setResource('todos')}}>Todos</button>

      <ResourceList resource={resource}/>
    </>
  )
}

const ResourceList = ({ resource }) => {

  const [ resources, setResources ] = useState([])

  const fetchResource = useCallback(async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data)
  }, [resource]);

  useEffect(() => {
    fetchResource(resource);
    // we could invoke fetchResource directly in useEffect IF we wrap it in an IIFE
    /* 
      (async resource => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );

        setResources(response.data);
      })()
    */
  }, [fetchResource, resource]);

  
  return (
    <div>
      {`${resource} available: ${resources.length}`}
    </div>
  )
}

export default Async;