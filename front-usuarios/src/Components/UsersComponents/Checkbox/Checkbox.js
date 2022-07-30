import React, { useEffect, useRef, useState } from 'react'

function Checkbox({ id, value, action }) {
  const [checked, setChecked] = useState(false)
  const inputRef = useRef()
  useEffect(() => {
    action(inputRef, checked)
  }, [checked, inputRef])

  return <input type="checkbox" ref={inputRef} id={id} value={value} onChange={() => setChecked(!checked)}></input>
}

export default Checkbox
