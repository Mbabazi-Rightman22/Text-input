//import  classnames from './classnames' 
import propType from 'prop-types'

import React, { Fragment} from 'react'

import ErrorLabel from './ErrorLabel'
import Label from './Label'

const Textinput = ({
  className,
  error,
  label,
  onChange,
  required,
  value,
  ...props 
}) => (
<Fragment>
  {Boolean(label) && (
<label className='text-input_label' required={required}>
{label}
</label>
  )}
<textinput 
 {...props}
 rows={''}
 value={value || ''}
 onChange={event => onChange(event.target.value)}
 className={classnames('textinput', className)}
 aria-label={label}
 aria-required={required}
/>
<ErrorLabel error={error} />
</Fragment>
)

Textinput.propTypes ={
className: propType.string,
error: propType.oneOfType([
  propType.string,
propType.arrayOf(propType.string),
]),
label: propType.string,
onblur: propType.func,
onChange: propType.func,
required: propType.bool,
type: propType.string,
value: propType.oneOfType([
propType.string, propType.number]),
}

export default Textinput