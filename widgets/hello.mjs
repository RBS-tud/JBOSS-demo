// hello.mjs: the smallest useful anywidget.
//
// MyST calls render() once per {anywidget} directive.
//   model: holds the JSON body of the directive (read it with model.get)
//   el:    an empty element to draw into

function render({ model, el }) {
  const name = model.get("name") ?? "world";
  el.innerHTML = `<p>👋 Hello, <strong>${name}</strong>! This paragraph was written by JavaScript.</p>`;
}

export default { render };
