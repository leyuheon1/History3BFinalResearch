class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = navbarStr;
    }
}

customElements.define('my-header', MyHeader)


//from here navbar
var navbarStr = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="./index.html">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="./index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PreIndustrialization
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="./beginning16.html">Beginning of the 16th century</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="./habsburgs.html">The Habsburgs</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Before Napoleon</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="./napoleon.html">Napoleonic Wars</a>
          </div>
          
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Industrial World
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Concert of Europe - after Napoleon</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">German Empire</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">The Calm Before the Storm</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">World War I</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Intewar Period</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">World War II</a>
            </div>
            
          </li>

      </ul>

    </div>
  </nav>
`;