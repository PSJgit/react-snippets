import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useResources = (resourceType) => {
  const [ resources, setResources ] = useState([])

  const fetchResource = useCallback(async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourceType}`
    );

    setResources(response.data)
  }, [resourceType]);

  useEffect(() => {
    fetchResource(resourceType);
  }, [fetchResource, resourceType]);

  return resources;
}

export default useResources;