import React from 'react'

export default function Alert(props) {
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type} : </strong>{props.alert.msg}
        </div>
  )
}


//Here the props.alert && will be first evaluated and if there will be any alert then the next thing will be evaluated or else nothing will be evaluated just similar to if else statement.