import React, { Component } from 'react';
class App extends Component{
   render(){
    var tableborder ={
        border:'1px dashed green'
    }

      return(
         <div>
             <div>
                 <h1>Assignment1 :: Happy Learning-React</h1>
            <h3>Happy Learning-React</h3>
            </div><br></br>
            <div>
                <h1>JSX - Assignment2</h1>
                <table style={tableborder}>
                    <tr style={{backgroundColor:'cyan'}}><th>Emp ID</th><th>Name</th><th>Email ID</th></tr>
                    <tr><td>1</td><td>abc</td><td>abc@abc.com</td></tr>
                    <tr><td>2</td><td>def</td><td>def@def.com</td></tr>
                    <tr><td>3</td><td>ghi</td><td>ghi@ghi.com</td></tr>
                </table>
            </div><br></br>
            <div>
                <h1>JSX - Assignment3</h1>
               <FiveTable/>
            </div>
         </div>
      );
   }
}
class FiveTable extends React.Component {
    render() {

      const fivetable=[];
      for (var i=1; i <=10; i++) {
      fivetable.push(<tr><td>5</td><td>*</td><td>{i}</td><td>=</td><td> {5*i}</td></tr>)
     } 

       return (
          <div>
             <table>
                {fivetable}
             </table>
          </div>
       );
    }
 }
export default App;