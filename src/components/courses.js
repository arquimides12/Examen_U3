class EspeCourses extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        h2 { color: #1a4d80; font-family: 'Roboto', sans-serif; }
        ul { font-family: 'Roboto', sans-serif; }
      </style>
      <section>
        <h2>Oferta Académica</h2>
        <ul>
          <li>Ingeniería en Sistemas - Desarrollo de software y aplicaciones.</li>
          <li>Ingeniería Electrónica - Sistemas embebidos y telecomunicaciones.</li>
          <li>Ingeniería Civil - Construcción e infraestructuras.</li>
          <li>Ingeniería en Mecatrónica - Robótica y automatización.</li>
        </ul>
      </section>
    `;
  }
}

customElements.define('espe-courses', EspeCourses);
