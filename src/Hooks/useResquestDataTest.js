import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestDataTest = (initialData, url, headers) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios
      .get(url, headers)
      .then((response) => {
        setData(response.data)
        console.log(response.data.restaurants)
      })
      .catch((error) => {
        console.log(error.response.data.message)
        alert(error.response.data.message)
      })
  }, [url])

  return (data)
}

export default useRequestDataTest;