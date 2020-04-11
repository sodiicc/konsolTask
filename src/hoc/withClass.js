import React from 'react'

const withClass = (Component, classname) => {
  return (props) => {
    return (
      <div className={classname}>
        <Component  {...props} />
      </div>
    )
  }
}

export default withClass