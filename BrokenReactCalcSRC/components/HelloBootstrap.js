import React from "react";

const HelloBootstrap = () => 
  <div className="container-fluid"> 

<nav className="nav-extended">
    <div className="nav-wrapper">
      <a href="" className="brand-logo">Logo</a>
      <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a href="#test1">Test 1</a></li>
        <li className="tab"><a className="active" href="#test2">Test 2</a></li>
        <li className="tab disabled"><a href="#test3">Disabled Tab</a></li>
        <li className="tab"><a href="#test4">Test 4</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>

<ul className="collection">
    <li className="collection-item avatar">
      <img src="images/yuna.jpg" alt="" className="circle"/>
      <span className="title">Title</span>
      <p>First Line 
        Second Line<br/>
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
    <li className="collection-item avatar">
      <i className="material-icons circle">folder</i>
      <span className="title">Title</span>
      <p>First Line <br/>
          Second Line
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
    <li className="collection-item avatar">
      <i className="material-icons circle green">insert_chart</i>
      <span className="title">Title</span>
      <p>First Line <br/>
          Second Line
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
    <li className="collection-item avatar">
      <i className="material-icons circle red">play_arrow</i>
      <span className="title">Title</span>
      <p>First Line <br/>
          Second Line
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
  </ul>
        
  <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="images/office.jpg" alt=""/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>

  <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="images/office.jpg" alt=""/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>

    <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="images/office.jpg" alt=""/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>

    <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="images/office.jpg" alt=""/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>

<footer className="page-footer">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </div>
      <div className="col l4 offset-l2 s12">
        <h5 className="white-text">Links</h5>
        <ul>
          <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
    © 2014 Copyright Text
    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
    </div>
  </div>
</footer>


</div>;

export default HelloBootstrap;
