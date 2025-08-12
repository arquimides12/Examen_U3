class EspeCourses extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          max-width: 800px;
          margin: 20px auto;
          padding: 0 16px;
          font-family: 'Roboto', sans-serif;
          color: #333;
        }
        h2 {
          color: #1a4d80;
          margin-bottom: 12px;
        }
        ul {
          font-size: 1.1rem;
          padding-left: 20px;
          line-height: 1.5;
        }
        li {
          margin-bottom: 8px;
        }
      </style>
      <div class="container">
        <h2>Oferta Académica</h2>
        <ul>
          <li><strong>Ingeniería en Sistemas</strong> - Desarrollo de software y aplicaciones.</li>
          <li><strong>Ingeniería Electrónica</strong> - Sistemas embebidos y telecomunicaciones.</li>
          <li><strong>Ingeniería Civil</strong> - Construcción e infraestructuras.</li>
          <li><strong>Ingeniería en Mecatrónica</strong> - Robótica y automatización.</li>
        </ul>
      </div>
    `;
  }
}

customElements.define('espe-courses', EspeCourses);
