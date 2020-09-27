import { render } from '@testing-library/react'
import React,{useState} from 'react'

function SetState (){
    const [name,setName] = useState('Dog')

    const getame = ()=>{
        setName('cat')
    }
    return (
        <React.Fragment>
            <div >name:{name}</div>
            <button onClick={getame}>更换 name 值</button>
        </React.Fragment>
        
    )
}

export default SetState