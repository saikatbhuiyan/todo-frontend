import React from 'react';
import axios from 'axios';

// const list = 
//   [
//     {
//         "id": 1,
//         "title": "Python RESTAPI",
//         "body": "pip install djangorestframework\r\nfrom rest_framework import generics"
//     },
//     {
//         "id": 2,
//         "title": "Start Django",
//         "body": "python -m venv env\r\n.\\env\\Scripts\\activate.bat\r\n\r\npip install django"
//     },
//     {
//         "id": 3,
//         "title": "Create Django App",
//         "body": "django-admin startproject name\\\n\npython manage.py startapp appname"
//     }
//   ]

class App extends React.Component {

  state={
    todos : []
  };


  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        console.log(res);
        this.setState({ todos:res.data })
      })
      .catch(err => {
        console.log(err);
      })
  }
  // constructor(props){
  //   super(props);
  //   this.state = { list };
  // }

  render() {
    return (
      <div>
        {this.state.todos.map(data => (
          <div key={data.id}>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
