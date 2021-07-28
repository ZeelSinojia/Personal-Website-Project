import "./App.css";
import Header from "./MyComponents/Header";
import Content from "./MyComponents/Content";
import About from "./MyComponents/About";
import Skills from "./MyComponents/Skills";
import Contact from "./MyComponents/Contact";
import Work from "./MyComponents/Work";
import {BrowserRouter, Switch, Route}  from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/" exact component={Content} />
      <Route path="/about" exact component={About} />
      <Route path="/skills" exact component={Skills} />
      <Route path="/work" exact component={Work} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
