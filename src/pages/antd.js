import React,{Component} from 'react'
import { TimePicker, Button,AutoComplete ,Badge } from 'antd';
import 'antd/dist/antd.css';
import '../assets/antd.less'
const { Option } = AutoComplete;
class Antd extends React.Component {
  state = { 
    open: false,
    options:[{value:'nihao',key:'nihao'},{value:'jell',key:'jell'},{value:'AA',key:'AA'},{value:'nihao'},{value:'jell'},{value:'AA'},{value:'nihao'},{value:'jell'},{value:'AA'}],
    options1:[{value:'nihao',key:'nihao',label:'nihao 111'},{value:'jell',key:'jell'},{value:'AA',key:'AA'}],

    count:99,
    value:'京东'
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
      count:newCount
    })
  }

  renderTitle = (title) => {
    return (
      <span>
        {title} <a style={{ float: 'right' }}>more</a>
      </span>
    );
  };
  
  renderItem = (title, count) => {
    return {
      title:title+'11',
      value: title,
      label: (
        <div style={{display: 'flex',justifyContent: 'space-between'}} >
          {title}
          <span>{count}</span>
        </div>
      ),
    };
  };
  onSearch = (text)=>{
    console.log(text)
    // this.setState({
    //   value:text
    // })
  }
  render() {
    return (
      <div>
        <div>
          <Badge count={this.state.count} overflowCount={102}/>

          <div onClick={this.add}>增加</div>
        </div>
         <div className="badge">
            <AutoComplete
              dropdownClassName="certain-category-search-dropdown"
              dropdownMatchSelectWidth={500}
              style={{ width: 250 }}
              options={[{
                  value:'Libraries',
                  label: this.renderTitle('Libraries1'),
                  options: [{
                    label: this.renderTitle('Libraries22'),
                    options:this.renderItem('AntDesign 11UI', 10600)
                  }, this.renderItem('AntDesign UI', 10600)],
                },{
                  label: this.renderTitle('Solutions'),
                  value:'xingming'
                },{
                  label: this.renderTitle('Articles'),
                  options: [this.renderItem('AntDesign design language', 100000)],
                },
              ]}
            >
            </AutoComplete>
          </div>

        <TimePicker
          open={this.state.open}
          onOpenChange={this.handleOpenChange}
          renderExtraFooter={() => (
            <Button size="small" type="primary" onClick={this.handleClose}>
              Ok
            </Button>
          )}
        />

        <div className="badge">
          <AutoComplete
            style={{ width: 200 }}
            placeholder="control mode"
            value={this.state.value}
            onSearch={this.onSearch}
          >
             <AutoComplete.Option key={'start'} value={'start'} label={'start111'}>
              <p>AutoComplete</p>
            </AutoComplete.Option>
            <AutoComplete.Option key={'京东'} value={'京东'} label={'jingdong 111'}>
              京东
            </AutoComplete.Option>
            <AutoComplete.Option key={'end'} value={'end'} label={'end 111'}>
              ‘end‘
            </AutoComplete.Option>
          </AutoComplete>
        </div>

        <div className="badge">
          <AutoComplete
            style={{ width: 200 }}
            placeholder="control mode"
            options={this.state.options1}
          >
        
          </AutoComplete>
        </div>
        
        
      </div>
    );
  }
}
export default Antd