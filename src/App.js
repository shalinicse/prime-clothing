
import {Routes, Route, Outlet} from 'react-router-dom';

import Home from "./routes/home/home.component";

import Navigation from './routes/navigation/navigation.component';

import SignIn from './routes/sign-in/sign-in.component';

const Shop= () =>{
  return(
    <h1>I am on sign in  page</h1>
  )
}
const App=()=> {
  return (
    <Routes >
          <Route path='/' element={<Navigation/>}>
        
                <Route index element={  <Home/> }/>
                < Route path='shop' element={ <Shop />} />
                < Route path='sign-In' element={ <SignIn />} />

            </Route>
    </Routes>
    ) ;
      
      };

export default App;
