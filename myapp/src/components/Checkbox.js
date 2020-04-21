import React from 'react'
import PropTypes from 'prop-types'
function Checkbox({type='checkbox',name,checked,onChange,label}) {
    return (<label><input type={type} name={name} checked={checked} onChange={onChange}></input>{label}</label>)
}
Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    label:PropTypes.string.isRequired
}
export default Checkbox