
const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

  jsContainer.innerHTML = `
    <div class="demo">
      Hello JS
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      "div", /*  type */
      { className: "demo" }, /* [properties or props] */
      "Hello React ", /* [...children] */ 
    ),
    reactContainer
  );
