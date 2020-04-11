import React, {useContext} from 'react'
import { ClickedContext } from '../App'

const Counter2 = props => {
  const clicked = useContext(ClickedContext)
  return (
    <div style={{ border: '2px solid grey' }}>
      <h2>Counter2</h2>
        {clicked ? <p>Clicked</p> : null}
           
    </div>
  )
}

export default Counter2