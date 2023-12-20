import React, { useState } from 'react'
import UserContext from './Provise'
const   Context = (children) => {
  const [list, setlist] = useState(null)
  return (
    <>
      <UserContext.Provider value={{ list, setlist }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default Context
