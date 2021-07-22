import './App.css';
import AsideBar from './AsideBar.js'
import NavBar from './NavBar.js'
import CardRender from './CardRender.js'
import Footer from './Footer.js'
import { Switch, Route, Link, useParams } from 'react-router-dom'
import { AppContext } from './AppContext';
import { useContext, useState } from 'react';
// import tricks from './data.js'
import LoginForm from './LoginForm'
import FrontPage from './FrontPage.js';
import SignUpForm from './SignUpForm';
import ProgressionBar from './ProgressionBar';
import { getTricks } from './Api'

function App() {
  const {filter} = useContext(AppContext)

  const tricks = getTricks()
  const {numAchieved, totalAchieve, setTotalAchieve} = useContext(AppContext)
  setTotalAchieve(tricks.length)
  

  const percentage = numAchieved/totalAchieve * 100 ;
  return (
    <div className="App">
      
        
       <Switch>
        <Route path="/main">
          <NavBar />
                <div className="middle">
                  <AsideBar />
                  
                  <div className="main">
                    <ProgressionBar percentage={percentage}/>
                    <div className="view-select">
                      <select name="" id="">
                        <option value="">Card</option>
                        <option value="">List</option>
                      </select>
                    </div>
                    <div className="card-container">
                      <CardRender tricks={tricks} filter={filter}/>
                    </div>
                  </div>
                </div>
        </Route>

        <Route path="/login">
          <NavBar />
          <LoginForm />
        </Route>

        <Route path="/signup"> 
          <NavBar />
          <SignUpForm />
        </Route>

        <Route>
          <FrontPage path="/" /> 
        </Route>
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
