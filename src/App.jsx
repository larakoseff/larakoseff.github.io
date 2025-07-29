import { useState } from 'react'
import LKLogo from '/favicon-logo.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="mailto:larakoseff@gmail.com" target="_blank">
          <img src={LKLogo} className="logo" alt="LK logo" />
        </a>
      </div>
      <div className="card">
        <p>Hi there. Busy rethinking and rebuilding this site. Please come back again in the near future. In the meantime, visit <a href="https://github.com/larakoseff" target='blank'>GitHub</a> or <a href="https://www.linkedin.com/in/lara-koseff-37a04b7/" target='blank'>LinkedIn</a> to see what I'm up to.</p>
      </div>
    </>
  )
}

export default App
