import { Switch, Route } from "react-router-dom";
import Home from '../../views/Home';
import Login from '../../views/Login';
import SignUp from '../../views/SignUp';
import TimeTrack from '../../views/TimeTrack';
import Logout from "../Logout/Logout";

interface Props {
    checkAuth: () => void
}
 
const TheRoute = (props: Props) => {

    return (
        <Switch >
            <Route path="/" render={() => <Home checkAuth={props.checkAuth} />} exact></Route>
            <Route path="/login" render={() => <Login checkAuth={props.checkAuth} />} ></Route>
            <Route path="/sign-up"render={() => <SignUp checkAuth={props.checkAuth} />}></Route>
            <Route path="/time-track" component={TimeTrack}></Route>
            <Route path="/logout" render={() => <Logout checkAuth={props.checkAuth} />}></Route>
        </Switch>

    )
}

export default TheRoute
