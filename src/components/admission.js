class EspeAdmission extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          max-width: 700px;
          margin: 40px auto;
          padding: 30px 25px;
          font-family: 'Roboto', sans-serif;
          background-color: #f0f4fb;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(26, 77, 128, 0.15);
          color: #1a4d80;
        }
        h2 {
          font-weight: 800;
          font-size: 2.4rem;
          margin-bottom: 30px;
          letter-spacing: 1.2px;
          text-align: center;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        ol {
          font-size: 1.15rem;
          color: #34495e;
          padding-left: 20px;
          line-height: 1.8;
        }
        ol li {
          margin-bottom: 18px;
          font-weight: 500;
          border-left: 4px solid #1a4d80;
          padding-left: 12px;
          transition: color 0.3s ease;
          cursor: default;
        }
        ol li:hover {
          color: #14416a;
        }
      </style>
      <div class="container">
        <h2>Proceso de Admisión</h2>
        <ol>
          <li>Revisión de requisitos académicos y documentación.</li>
          <li>Presentación del examen de admisión.</li>
          <li>Entrevista personal (si aplica).</li>
          <li>Publicación de resultados y matrícula.</li>
        </ol>
      </div>
    `;
  }
}

customElements.define('espe-admission', EspeAdmission);
