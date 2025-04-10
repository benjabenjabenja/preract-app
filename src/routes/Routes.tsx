//Router:
import { Route, Router } from "preact-iso";
//Pages:
import { Home } from "../pages/Home";
import { BenjaLayout } from "../pages/Benja";
import { NotFound } from "../pages/_404";
//Styles:
import '../style.css';

const Routes = () => (
    <Router>
        <Route path="/" component={Home} />
        <Route path="/benja" component={BenjaLayout} />

        <Route path="/benja/params/name/:name" component={BenjaLayout} />
        
        <Route default component={NotFound} />
    </Router>
)

export default Routes;
