var title = document.getElementById("typewriter");

var typewriter = new Typewriter(title, {
  loop: false,
});

typewriter
  .typeString("WEB DEVELOPER")
  .pauseFor(2000)
  .deleteAll()
  .typeString("SOFTWARE ENGINEER")
  .pauseFor(2000)
  .deleteAll()
  .typeString("UX DESIGNER")
  .pauseFor(2000)
  .deleteAll()
  .typeString("SARA C. GAYA")
  .start();
/***********************************************************/

function dualCall(classToAdd, classToRemove) {
  addClass(classToAdd);
  removeClass(classToRemove);
}

function addClass(className) {
  const body = document.body;
  if (body.classList) {
    body.classList.add(className);
  }
}

function removeClass(className) {
  const body = document.body;
  if (body.classList) {
    body.classList.remove(className);
  }
}
