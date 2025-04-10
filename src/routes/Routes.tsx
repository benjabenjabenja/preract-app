//Router:
import { Route, Router } from "preact-iso";
//Pages:
import { NotFound } from "../pages/_404";
import { Home } from "../pages/Home";
//Styles:
import '../style.css';

const Routes = () => (
    <Router>
        <Route path="/" component={Home} />
        <Route default component={NotFound} />
    </Router>
)

export default Routes;
