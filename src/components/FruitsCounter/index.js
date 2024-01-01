import { Component } from "react";
import "./index.css"
class FruitsCounter extends Component{ 
    state={count:0,counter:0}
   
    onMangoes=()=>{
        this.setState((prevState)=>(
            {
                count:prevState.count+1
            }
        ))
    } 
    onBananas=()=>{
        this.setState((prevState)=>(
            {
                counter:prevState.counter+1 
               
            } 
           
        )) 
        
    }
    render(){ 
        const {count}=this.state 
        const {counter}=this.state
        return(
            <div className="bg-container"> 
              <div className="card-container"> 
                <h1 className="heading">Bob ate {count} Mangoes {counter} Bananas</h1> 
                  <img className="img" src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mangoes"/>
                   <img className="img" src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="bananas"/>
                <br/> 
                <button className="button" onClick={this.onMangoes}>Eat Mango</button> 
                <button className="button" onClick={this.onBananas}>Eat Banana</button>

              </div>


            </div>
        )
    }
} 
export default FruitsCounter