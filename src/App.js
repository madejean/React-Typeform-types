import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import './App.css';

class App extends Component {
  state = {
   value: "",
 };

 handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className="App">
        <div className="standard-form">
          <h1>Typeform types with React</h1>
          <form>
            <h3>Standard HTML</h3>
            <p><label>Text </label>
              <input placeholder="firstname" type="text" /></p>
            <p><label>Email </label>
              <input placeholder="email" type="email" /></p>
            <p><label>Phone </label>
              <input placeholder="phone number" type="tel" /></p>
            <p><label>Date </label>
              <input type="date" /></p>
            <p><label>Dropdown </label>
              <input placeholder="search" type="search" autofocus list="searchableList" />
              <datalist id="searchableList">
                <option value="surgery1" />
                <option value="surgery2" />
              </datalist></p>
            <p><label>Radio buttons </label>
              <input type="radio" name="yes/no" value="yes" />Yes
              <input type="radio" name="yes/no" value="no" />No
            </p>
            <p><label>Checkbox</label>
              <input type="checkbox" /></p>
            <input type="submit" />
          </form>
        </div>
        <div className="bootstrap-form">
          <form>
            <h3>Bootstrap</h3>
              <TextField hintText="firstname" /><br />
              <TextField hintText="email" type="email"  /><br />
              <TextField hintText="phone number" type="tel" errorText="please enter a valid phone number" /><br />
              <DatePicker hintText="date" />
              <SelectField hintText="select" value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="surgery1" />
                <MenuItem value={2} primaryText="surgery2" />
              </SelectField>
              <RadioButtonGroup name="yes/no">
                <RadioButton style={{ display: 'inline-block', width: '130px' }} label="Yes" value="yes" />
                <RadioButton style={{ display: 'inline-block', width: '130px', marginLeft: '20px' }} label="No" value="no" />
              </RadioButtonGroup><br />
              <Checkbox style={{ display: 'inline-block', width:'100px'}} label="checkbox" labelPosition="left" /><br /><br/>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
