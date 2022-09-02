import React from 'react'

const All = (props) => {
  if(!props.item)
  return

  const items = props.item.map(ite=>
    {
      const styles = {textDecoration:ite.done?'line-through':'none',wordBreak: 'breakall',lineBreak:' anywhere'}
    return <div style={{width:'100%'}}> <h2 key={ite.id} style={styles}>{ite.item}</h2><div className='line'></div></div>
  })
  return (
    <div style={{width:'100%'}}>{items}</div>
  )
}

export default All