import { gsap } from "gsap";

export class EventManager {
  constructor(updatePointer, handlePick, hidePage) {
    this.updatePointer = updatePointer;
    this.handlePick = handlePick;
    this.hidePage = hidePage;
    this.touchHandled = false;
  }

  setEvents() {

    window.addEventListener('mousemove', this.updatePointer);
    window.addEventListener('touchmove', this.updatePointer);
    window.addEventListener('touchstart', this.updatePointer);
    
    window.addEventListener('touchend', (event) => {
      this.touchHandled = true;
      this.handlePick(event);
      event.preventDefault();
      setTimeout(() => this.touchHandled = false, 300); // reset after short delay
    });

    window.addEventListener('click', (event) => {
      if (this.touchHandled) return; // ignore if already handled by touch
      this.handlePick(event);
    });

    document.querySelectorAll('.page .exit-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const page = e.target.closest('.page');
        this.hidePage(page);
      }); 
    });

    document.querySelectorAll('.page .exit-btn').forEach(btn => {
      btn.addEventListener('touchstart', (e) => {
        const page = e.target.closest('.page');
        this.hidePage(page);
      }); 
    });

    const alertBox = document.getElementById('intro-alert');
    const alertOk = document.getElementById('alert-ok');

    alertOk.addEventListener('click', () => {
      gsap.to(alertBox, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => alertBox.remove()
      });
    });

    alertOk.addEventListener('touchstart', () => {
      gsap.to(alertBox, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => alertBox.remove()
      });
    });

  }
}