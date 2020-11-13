import React,{Component} from 'react'
import { TimePicker, Button,AutoComplete  } from 'antd';
import 'antd/dist/antd.css';

class Antd extends React.Component {
  state = { 
    open: false,
    options:[{value:'nihao'},{value:'jell'},{value:'AA'},{value:'nihao'},{value:'jell'},{value:'AA'},{value:'nihao'},{value:'jell'},{value:'AA'}]
  };
  handleOpenChange = open => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  componentDidMount(){
    
    const se = new Set(['ll'])
    console.log(se.has('l'))
    
  }

  render() {
    return (
      <div>
        <TimePicker
          open={this.state.open}
          onOpenChange={this.handleOpenChange}
          renderExtraFooter={() => (
            <Button size="small" type="primary" onClick={this.handleClose}>
              Ok
            </Button>
          )}
        />

        <AutoComplete
          options={this.state.options}
          style={{ width: 200 }}
          placeholder="control mode"
        />
      </div>
    );
  }
}
export default Antd