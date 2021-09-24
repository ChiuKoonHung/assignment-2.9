import React from "react";
// import React, {useParams} from "react";
import Apple from "./Apple";
import Orange from "./Orange";
import Banana from "./Banana";
import "../App.css";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

function Tabs() {
    return(
        <Router>
            <div className='container'>
                <div className='menu'>
                    <div className='box'><Link to='/'>Apple</Link></div>
                    <div className='box'><Link to='/Orange'>Orange</Link></div>
                    <div className='box'><Link to='/Banana'>Banana</Link></div>
                </div>
                <div className='content'>
                <Switch>
                    <Route path='/' exact><Apple /></Route>
                    <Route path='/Orange'><Orange /></Route>
                    <Route path='/Banana'><Banana /></Route>
                    <Route component= {NotFoundPage} />
                </Switch>
                </div>

            </div>
        </Router>
    );
}

function NotFoundPage() {
    return (
        <>
          <h1>404: Page not found</h1>
        </>
    );
}

export default Tabs;

// function Tabs() {
//     return(
//         <Router>
//             <div className='container'>
//                 <div className='menu'>
//                     <div><Link to='/facebook'>Facebook</Link></div>
//                     <div><Link to='/netflix'>Netflix</Link></div>
//                     <div><Link to='/yahoo'>Yahoo</Link></div>
//                 </div>
//                 <div className='content'>
//                 <Switch>
//                     <Route path='/:accountName/:region'><Child /></Route>
//                 </Switch>
//                 </div>

//             </div>
//         </Router>
//     );
// }

// function Child() {
//     let {accountName} = useParams();
//     return (
//         <div>
//           <h3>Account Name: {accountName} </h3>
//           <h3>Region: {region} </h3>
//         </div>
//     );
// }

// export default Tabs;