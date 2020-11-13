/* eslint no-console:0, react/no-multi-comp:0, react/jsx-no-bind:0, react/prop-types: 0 */

import Animate from 'rc-animate';
import React from 'react';
import velocity from 'velocity-animate';

import '../../assets/index.less';

const Box = props => {
  const style = {
    width: '200px',
    display: props.show ? 'block' : 'none',
    height: '200px',
    backgroundColor: 'red',
  };
  return (<div style={style} />);
};

class Rc extends React.Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef();
    this.state = {
      destroyed: false,
      visible: true,
      exclusive: false,
    }
  }
  

  toggleAnimate = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }

  animateEnter = (node, done) => {
    let ok = false;

    function complete() {
      if (!ok) {
        ok = 1;
        done();
      }
    }

    node.style.display = 'none';

    velocity(node, 'slideDown', {
      duration: 1000,
      complete,
    });
    return {
      stop() {
        velocity(node, 'finish');
        // velocity complete is async
        complete();
      },
    };
  }

  animateLeave = (node, done) => {
    let ok = false;

    function complete() {
      if (!ok) {
        ok = 1;
        done();
      }
    }

    node.style.display = 'block';

    velocity(node, 'slideUp', {
      duration: 1000,
      complete,
    });
    return {
      stop() {
        velocity(node, 'finish');
        // velocity complete is async
        complete();
      },
    };
  }

  toggle = (field) => {
    this.setState({
      [field]: !this.state[field],
    });
  }

  destroy = () => {
    this.setState({
      destroyed: true,
    });
  }

  change = ()=>{
      const a = this.state.visible
      this.setState({
        visible:!a
      })
  }

  render() {
    const anim = {
      enter: this.animateEnter,
      leave: this.animateLeave,
    };

    return (
      <div>
        <div onClick={this.change}>点击</div>
        <Animate
          component=""
          showProp="show"
          transitionName="fade"
        >
          {/* {this.state.destroyed ? null : <Box show={this.state.visible}/>} */}
         <div show={this.state.visible} style={{
                width: '200px',
                display: this.state.visible ? 'block' : 'none',
                height: '200px',
                backgroundColor: 'red',
            }}></div>
        </Animate>

        <div ref={this.myRef} />
      </div>
    );
  }
}

export default Rc
