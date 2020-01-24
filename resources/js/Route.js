import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login/Login';
import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
import Databarang from './Databarang/Databarang';
import Barangmasuk from './Barangmasuk/Barangmasuk';
import Barangkeluar from './Barangkeluar/Barangkeluar';
import Databarangmasuk from './Databarangmasuk/Databarangmasuk';
import Databarangkeluar from './Databarangkeluar/Databarangkeluar';
import Editbarangmasuk from './Editbarangmasuk/Editbarangmasuk';
import Editdatabarang from './Editdatabarang/Editdatabarang';
import Editbarangkeluar from './Editbarangkeluar/Editbarangkeluar';
import Tambahbarang from './Tambahbarang/Tambahbarang';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          
          <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/Home' component={Homepage}/>
              <Route exact path='/Databarang' component={Databarang} />
              <Route exact path='/Barangmasuk' component={Barangmasuk} />
              <Route exact path='/Barangkeluar' component={Barangkeluar} />
              <Route exact path='/Databarangmasuk' component={Databarangmasuk} />
              <Route exact path='/Databarangkeluar' component={Databarangkeluar} />
              <Route exact path='/Editbarangmasuk/:id' component={Editbarangmasuk} />
              <Route exact path='/Editbarangkeluar/:id' component={Editbarangkeluar} />
              <Route exact path='/Editdatabarang/:id' component={Editdatabarang} />
              <Route exact path='/Tambahbarang' component={Tambahbarang} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App