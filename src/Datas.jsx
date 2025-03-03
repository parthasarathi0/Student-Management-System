import React, { useContext } from 'react'


const Datas = (props) => {
   console.log(props.stuname);
   console.log(props.stuGrade);
   
   
    
  return (
    <div>
        {props.stuname}
        {props.stuGrade}
        </div>
  )
}

export default Datas