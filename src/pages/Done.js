import React from 'react'

const Done = (props) => {
  if(!props.item)
  return
  // ite.done?console.log(ite.done) :
  const items = props.item.map(ite=>{
    return <> <h2 key={ite.id} style={{wordBreak: 'breakall',lineBreak:' anywhere'}}>{ite.item}</h2><div className='line'></div></>
  })
  return (
    <div style={{width:'100%'}}>{items}</div>
  )
}

export default Done