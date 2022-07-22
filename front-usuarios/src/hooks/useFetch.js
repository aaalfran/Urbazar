import { useState, useEffect } from 'react'

/**
 * Fetch data using the method passed as parameter (GET, POST, PUT, PATCH, DELETE)
 * @param {String} url
 * @param {String} method
 * @param {JSON} body
 * @returns
 */
const useFetch = (url, method = 'GET', body = {}) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(url, { method: method, body: body })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, [url])
  return [data]
}
export default useFetch
