import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Nav = () => {
  return (
    <div className='nav'>
      <h2> TODO List </h2>
      <CheckCircleOutlineIcon sx={{
        paddingInline:'1em'
      }}/>
    </div>
  )
}

export default Nav