class EspeAdmission extends HTMLElement {
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
          font-size: 1.1rem;
          margin-bottom: 12px;
        }
      </style>
      <div class="container">
        <h2>Proceso de Admisión</h2>
        <p>Para ingresar a la Universidad de las Fuerzas Armadas ESPE, debes seguir estos pasos generales:</p>
        <ul>
          <li>Revisión de requisitos académicos y documentación.</li>
          <li>Presentación del examen de admisión.</li>
          <li>Entrevista personal (si aplica).</li>
          <li>Publicación de resultados y matrícula.</li>
        </ul>
      </div>
    `;
  }
}

customElements.define('espe-admission', EspeAdmission);
