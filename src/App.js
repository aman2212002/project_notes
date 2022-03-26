import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import MainNote from './components/Notes/MainNote';
import Timetable from './components/Timetable';



 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            
            
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/MainNote' element={< MainNote />}></Route>
                 <Route exact path='/TimeTable' element={<Timetable/>}></Route>
                 
          </Routes>
          </div>
       </Router>
   );

  }
}
 
export default App;