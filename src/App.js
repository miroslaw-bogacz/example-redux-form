import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ContactFormComponent } from './contact/contact';

const reducers = combineReducers({
  form: formReducer,
});

const store = createStore(reducers, composeWithDevTools());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <br/>
          <ContactFormComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
