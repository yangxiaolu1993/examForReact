import React,{Component} from 'react'
import { TimePicker, Button,AutoComplete ,Badge } from 'antd';
import 'antd/dist/antd.css';
import '../assets/antd.less'
const { Option } = AutoComplete;
class Antd extends React.Component {
  state = { 
    open: false,
    options:[{value:'nihao',key:'nihao'},{value:'jell',key:'jell'},{value:'AA',key:'AA'},{value:'nihao'},{value:'jell'},{value:'AA'},{value:'nihao'},{value:'jell'},{value:'AA'}],
    options1:[{value:'nihao',key:'nihao'},{value:'jell',key:'jell'},{value:'AA',key:'AA'}],
    count:2
  };
  handleOpenChange = open => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  componentDidMount(){
    
  }
  add = ()=>{
    const newCount = this.state.count+1
    this.setState({
      count:0
    })
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

        {/* <div className="badge">
          <Badge count={this.state.count}>
            <a href="#" className="head-example" />
          </Badge>

          <div onClick={this.add}>点击</div>
        </div> */}

        <div className="badge">
          <AutoComplete
            style={{ width: 200 }}
            placeholder="control mode"
            
          >
             <AutoComplete.Option key={'start'} value={'start'}>
              <p>AutoComplete</p>
            </AutoComplete.Option>
            <AutoComplete.Option key={'京东'} value={'京东'}>
              京东
            </AutoComplete.Option>
            <AutoComplete.Option key={'end'} value={'end'}>
              ‘end‘
            </AutoComplete.Option>
          </AutoComplete>
        </div>
        
        
        
      </div>
    );
  }
}
export default Antd