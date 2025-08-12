class EspeAbout extends HTMLElement {
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
          line-height: 1.6;
        }
        h2 {
          color: #1a4d80;
          margin-bottom: 12px;
        }
        p {
          margin-bottom: 12px;
          font-size: 1.1rem;
        }
      </style>
      <div class="container">
        <h2>Sobre la ESPE</h2>
        <p>
          La Universidad de las Fuerzas Armadas ESPE (ESPE) es una institución de educación superior pública en Ecuador, con origen en la Escuela de Oficiales Ingenieros creada en 1922.
        </p>
        <p>
          Su misión es formar profesionales y generar conocimiento científico-tecnológico para contribuir al desarrollo del país y las Fuerzas Armadas.
        </p>
        <p>
          La visión de la ESPE es ser un referente nacional y regional por su aporte a la seguridad y defensa, bajo un marco de valores éticos y cívicos.
        </p>
      </div>
    `;
  }
}

customElements.define('espe-about', EspeAbout);
