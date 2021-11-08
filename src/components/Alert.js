import React from 'react'

function Alert(props) {
    const capitalise=(word)=>{
        const low = word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }
    return (
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalise(props.alert.type)}</strong> : <strong>{props.alert.msg}</strong>
</div>
    )
}

export default Alert
