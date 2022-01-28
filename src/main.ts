// containerElement
const container = document.querySelector<HTMLElement>('.container');
// childElement
const child = document.querySelector<HTMLElement>('.child');
// childの図形の直径
const diameter = 50;
// childの図形の半径
const radius = diameter / 2;

/**
 * mouseMove
 */
const mouseMove = (e: MouseEvent) => {
  // child!.style.left = e.clientX - radius + "px";
  // child!.style.top = e.clientY - radius + "px";
  child!.style.transform = 'translate(' + (e.clientX - radius) + 'px, ' + (e.clientY - radius) + 'px)';
}

child!.style.width = diameter + "px";
child!.style.height = diameter + "px";
container!.addEventListener("mousemove", mouseMove);


