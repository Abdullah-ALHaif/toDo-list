import React, { Component } from "react"; 

class Lists extends Component {  
  constructor(props) {    
    super(props);     
    this.createTasks = this.createTasks.bind(this);  
  }   

  createTasks(item) {    
    return <li key={item.key}>{item.text}</li>
  }   
  
  render() {    
    var todoEntries = this.props.entries;    
    var listItems = todoEntries.map(this.createTasks);     
    
    return (      
      <ul className="theList">
        <div>      
          {listItems}
        </div>   
      </ul>
      );  
    }
  } 
  
  export default Lists;