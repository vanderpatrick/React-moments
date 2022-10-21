import styles from "./app.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container"
import {Route,Switch} from 'react-router-dom'
import "./api/axiosDefaults"
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={()=><h1>Home page</h1>}/>
        </Switch>
        <Switch>
          <Route exact path="/signin" render={()=><SignInForm />}/>
        </Switch>
        <Switch>
          <Route exact path="/signup" render={()=><SignUpForm />}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;