import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ className, children, required, stype}) => {
  if (!children) {
    return 
  }
  return (
    <label className={className} style={style}>
      {children}
      {required && <span className='required' />}
      </label>
  )
}

Label.protoTypes ={
  children: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.object,
}

export default Label