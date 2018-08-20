import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import NavBar from './components/nav_bar';
import ClientForm from './components/forms/client_form';
import MyTable from './components/table';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <p className="App-intro text-center">{this.state.response}</p>
          {/* <ClientForm /> */}
          <div>
            <MyTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
