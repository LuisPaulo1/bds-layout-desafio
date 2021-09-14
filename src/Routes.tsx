import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Navbar from 'components/Navbar';

const Routes = () => (
    <BrowserRouter> 
        <Navbar />    
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products">
                <Catalog />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;