import React from 'react';
import { Link} from 'react-router-dom';

function Home(){
    return(
         <div>
         <nav>
             <ul className="App-header">
              
              <li>
                  <button>
                      <Link to="/MainNote">NOTE</Link>
                  </button>
                  <button>
                      <Link to="/Timetable">TIMETABLE</Link>
                  </button>
                
              </li>
              
              
            </ul>
             </nav>
           </div>
    
       
    );

}
export default Home;