import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            {/* adding key in News Component for rendering on the page because we are rendering single component on the screen and changings its values */}
            {/* key should be unique you can add category values as a key its depend on you */}
            <Route path="/"element={<News pageSize={5}  key={1} category="general" />}/>
            <Route path="/business" element={<News pageSize={5}  key={2} category="business" />}/>
            <Route path="/entertainment" element={<News pageSize={5}  key={3} category="entertainment" />}/>
            <Route path="/general"element={<News pageSize={5}  key={4} category="general" />}/>
            <Route path="/health" element={<News pageSize={5}  key={5} category="health" />}/>
            <Route path="/science"element={<News pageSize={5}  key={6} category="science" />}/>
            <Route path="/sports" element={<News pageSize={5}  key={7} category="sports" />}/>
            <Route path="/technology"element={<News pageSize={5} key={8}  category="technology" />}/>
          </Routes>
        </Router>
      </>
    )
  }
}

