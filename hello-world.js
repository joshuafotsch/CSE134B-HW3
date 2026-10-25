// Custom element that prints hello world when added to DOM
class HelloWorldElement extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    console.log("Hello World!");
  }

}

customElements.define("hello-world", HelloWorldElement);