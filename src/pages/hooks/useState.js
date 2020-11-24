import { render } from '@testing-library/react'
import moment from 'moment'
import React,{useState} from 'react'
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';
import './hooks.css'

function SetState (){
    const [name,setName] = useState('Dog')

    const [value, setValue] = useState(undefined);
    const [open, setOpen] = useState(false);

    const getame = ()=>{
        setName('cat')
    }

    const toArray = (list) =>{
        if (!list) {
          return [];
        }
        return Array.isArray(list) ? list : [list];
      }

    const onChange = time => {
        console.log(time)
        setTimeout(()=>{
            setValue(moment("12:34", "HH:mm"));
        },2000)
       
    };
    const handleOpenChange = open => {
        return 'this.setState({ open })'
        
    };

    console.log(moment("12:34:02", "HH:mm:ss"))
    return (
        <React.Fragment>
            <div className="box">
                <div className='name'>
                    <h3>name:{name}</h3>
                    <button onClick={getame}>更换 name 值</button>
                </div>
                <TimePicker onOpenChange={handleOpenChange} open={open}  renderExtraFooter={()=>(
                    <div>ok</div>
                )}/>
            </div>
            
        </React.Fragment>
        
    )
}

export default SetState