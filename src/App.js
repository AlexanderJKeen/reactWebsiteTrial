import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
class App extends React.Component {
  state = {
    slash: ["About","Home","Projects","Contact" ]
  }
  render(){
  return (
    
    <div className="App">
    <div className= "navbar">
      <Navbar /> 
      <Home />
      <About />
      <Contact />
      <Projects />
    </div>
      <header className="App-header">
        <img src="./t.jpg" className="App-logo" alt="logo" />
        <p>
          I'm editing this shiz        
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=PTEYCClxaUE"
          target="_blank"
          rel="noopener noreferrer"
          o
        >
          Chat shit get banged
        </a>

        {this.state.slash === "about" ? <About /> : this.state.slash === "projects" ? <Projects /> : this.state.slash === "contact" ? <Contact /> : <Home />}
      </header>
    </div>
  );
  }
}

const About = () => {
  return (
    <div>About</div>
  )
}

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default App;
