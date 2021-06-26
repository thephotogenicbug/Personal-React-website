import React, {Component} from 'react';
import Hero from './hero-img.svg';
class Main extends Component{


    render(){
        return(
           <section className="bg-dark">
                <div className="container">
                <div className="row">
                 <div className="col-md-6 " >
                   <h1 className="text-light" id="main-heading">Naveen Web Development Course Online</h1>
                   <p className="text-white">Learn HTML CSS BOOTSTRAP JAVASCRIPT REACT NODEJS MYSQL ONLINE</p>
                   <button className="btn btn-primary">Sign up</button>  
                 </div>
                 <div className="col-md-6">
                     <img src={Hero} className="img-fluid" id="hero"/>
                 </div>
                </div>
            </div>
           </section>
        )
    }


}
export default Main