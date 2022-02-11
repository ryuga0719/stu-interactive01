export default class Basic {
  public child = document.querySelector<HTMLElement>('.child');
  public diameter = 100;
  public radius = this.diameter / 2;

  constructor() {
    this.child!.style.width = this.diameter + "px";
    this.child!.style.height = this.diameter + "px";
    this.bind();
  }

  public handleMouse(e: MouseEvent) {
    this.child!.style.transform = 'translate(' + (e.clientX - this.radius) + 'px, ' + (e.clientY - this.radius) + 'px)';
  }

  public bind() {
    window.addEventListener('mousemove', this.handleMouse.bind(this))
  }

}