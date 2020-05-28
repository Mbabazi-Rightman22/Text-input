import React from 'react'
import classnames from 'classnames'
import castArray from 'lodash/castArray'
import propTypes from 'prop-types'


const ErrorLabel = ({ error, className }) => {
if (!error) {
return 
}
return (
  <div className={classnames('error-label', className)}>
    {castArray(error).map((error,ix) => (
<p key={ix}> 
<i className='' /> 

{(error || '').toString()}
</p>
 ))}
 </div>
)
}

ErrorLabel.propTypes = {
  className: propTypes.string,
error: propTypes.oneOfType([
propTypes.string,
propTypes.arrayOf(propTypes.string),
]),
}

export default ErrorLabel