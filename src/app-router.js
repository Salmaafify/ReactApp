import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'
import Home from './components/home'
import UserDetails from './components/userDetails'
import  NotFound from './components/notfound'
import NavBar from './components/navBar'

const AppRouter = ()=>{
    return <Router>
        <NavBar/>
        <div className="conatainer">
            <div className="row">
                <div className="col">
                    <Switch>
                        <Route exact path="/"  component={Home}/>
                        <Route  path="/users/:id" component={UserDetails}/>
                        <Route  path="*" component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
}

export default AppRouter