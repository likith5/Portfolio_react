import React from 'react'

const NavBar = ({setView}) =>{
  function myFunction() {
    const collection = document.getElementsByClassName("nav-item");
    collection[0].style.cursor = "pointer";
    collection[1].style.cursor = "pointer";
    collection[2].style.cursor = "pointer";


  }
  return (
    <div class="container">
   <nav class="navbar navbar-expand-xxl navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand"  onClick={() => setView('home')} >  Likith | Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" onMouseOver={myFunction} onClick={() => setView('home')} >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onMouseOver={myFunction} onClick={() => setView('resume')} >Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  active" onMouseOver={myFunction} onClick={() => setView('projects')}>Projects</a>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
  </div>
  )
}

export default NavBar;