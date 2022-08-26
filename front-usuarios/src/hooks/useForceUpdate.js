import { useState } from 'react'

function useForceUpdate() {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(0)
  return () => setValue((value) => value + 1)
}

export default useForceUpdate
