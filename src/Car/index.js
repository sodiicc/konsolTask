import React from 'react'
import withClass from '../hoc/withClass'
import Counter2 from '../Counter2'

const Car = props => {
  return (
    <div className='car-wrapper'>
      <h2>{props.name}: {props.year}</h2>
      <button className='car-bt' onClick={()=> props.handleChange(props.year)}>change to {props.name}</button>
      <Counter2 />
    </div>
  )
}

export default withClass(Car, 'bairaka')