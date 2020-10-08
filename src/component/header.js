import React, {Component} from 'react'

class Header extends Component
{
    constructor(props){
        super(props);

        this.state={
            title : "Raja ki aaye gi barat",
            countClick : 0,
            search : "Enter the text"
        }
    }
    
    inputTextFiels = (event) =>{
        //console.log(event.target.value);
        this.setState({search:event.target.value?event.target.value : "Enter the text" })
        this.props.searchData(event.target.value)
    }

    toggleLogoName = (event) =>{
        this.setState({title: this.state.title === "Raja ki aaye gi barat" ? "sala" : "Raja ki aaye gi barat" })
    }

    onButtonClick = () =>{
        
        this.state.countClick === 10 ? this.setState({countClick:0}) : this.setState({countClick : this.state.countClick + 1})
        console.log("->",this.state.countClick)
    }

    render(){
        return(
            <header>
                <div className='divDefault' onClick={this.toggleLogoName}>
                    {this.state.title}
                </div>
                <input className='inputDefault' type="text" onChange={this.inputTextFiels} placeholder="Enter text to search items->" maxLength='10'/>
                <p>{this.state.search} </p>
                <button onClick={this.onButtonClick}/>
            </header>
        )
    }

}


export default Header;


/*
const Header = () =>{
    return (
        <div>
            Header
        </div>
    )
}


/////////
render(){
        const styles = {
            headerDefault: {
                textAlign : 'center',
                backgroundColor : 'tomato'
            },
            divDefault:{
                textAlign : 'center',
                color     : 'blue'
            },
            inputDefault:{
                backgroundColor : 'black',
                textAlign : 'left',
                color   : 'yellow'
            }
        }


        return(
            <header style={styles.headerDefault}>
                <div style={styles.divDefault}>
                    Logo
                </div>
                <input type="text" placeholder="Enter text to search items->" maxLength='10' style={styles.inputDefault}/>
            </header>
        )
    }
*/