import React, { Component }  from "react";
import { connect } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { getSmurfs} from "./actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  
   componentDidMount(){
    
    this.props.dispatch(getSmurfs());
   
  }
  render() {
    
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.