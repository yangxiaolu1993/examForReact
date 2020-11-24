import React from 'react'
import './hooks.less'

const ThemeContext = React.createContext('light')
class CreateContext extends React.Component {
    render(){
        return (
            <div className="context">
                <ThemeContext.Provider value="black">
                    <Toobar/>
                </ThemeContext.Provider>
            </div>
        )
    }
}

class Toobar extends React.Component {
    render(){
        return <Btn/>
    }
}

class Btn extends React.Component {
    static contextType = ThemeContext
    render(){

        return <button>button 的 theme -- {this.context}</button>
    }
}

export default CreateContext