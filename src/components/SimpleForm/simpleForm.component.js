import React from "react";

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData: "",
      taskErr: "",
    };
    // this.handleSubmit=this.handleSubmit.bind(this);
    // this.handleChange=this.handleChange.bind(this);

  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.taskData=== "") {
      this.setState({
        taskErr: "task can not be empty",
      });
    } else {
      console.log(this.state.taskData);
      this.setState({
        taskData: "",
        taskErr: "",
      });
    }
  };
  handleChange=(e)=>{
    this.setState({
        taskData:e.target.value,
        taskErr:""
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="task">Add Task</label>
          <input id="task" className="form-control" 
          value={this.state.taskData} onChange={this.handleChange}></input>
          <span>{this.state.taskErr}</span>
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    );
  }
}

export default SimpleForm;
