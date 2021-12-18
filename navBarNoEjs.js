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
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="./beginning16.html">Columbus</a>
        <a class="nav-item nav-link" href="./habsburgs.html">Habsburgs</a>
        <a class="nav-item nav-link" href="./napoleon.html">Napoleon</a>
        <a class="nav-item nav-link" href="./riseOfNationalism.html">Nationalism</a>
        <a class="nav-item nav-link" href="./germany.html">Germany</a>
        <a class="nav-item nav-link" href="./ww1.html">World War I</a>
        <a class="nav-item nav-link" href="./ww2.html">World War II</a>
      </div>
    </div>
  </nav>
`;