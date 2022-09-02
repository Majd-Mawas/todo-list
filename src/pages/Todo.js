import { Checkbox } from '@mui/material'
import React from 'react'
const Todo = (props) => {
  if(!props.item)
  return

  const items = props.item.map(ite=>{
    return<> <div key={ite.id} style={{display:'flex',flexWrap:'wrap',width:'100%',justifyContent:'space-between'}}> <h2 key={ite.id} style={{wordBreak: 'breakall',lineBreak:' anywhere'}}>{ite.item}</h2><Checkbox onClick = {()=>props.change(ite.id)}/></div><div className='line'></div></>
  })

  if(props.item[0]==null)
  return
  return (
     <div className='todo-items'>
      {items}
      
    </div>

  )
}

export default Todo