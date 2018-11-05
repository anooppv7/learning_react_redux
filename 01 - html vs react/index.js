
const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

  jsContainer.innerHTML = `
    <div class="demo">
      Hello JS
      <input />
      <p>${new Date()}</p>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      "div", /*  type */
      { className: "demo" }, /* [properties or props] */
      "Hello React ", /* [...children] */ 
      React.createElement("input"),
      React.createElement(
        "p",
        null,
        new Date().toString()
      )
    ),
    reactContainer
  );
