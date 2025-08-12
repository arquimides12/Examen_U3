class EspeCourses extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          max-width: 900px;
          margin: 20px auto;
          padding: 0 16px;
          font-family: 'Roboto', sans-serif;
          color: #333;
        }
        h2 {
          color: #1a4d80;
          margin-bottom: 24px;
          text-align: center;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .course-card {
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          padding: 16px;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }
        img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 6px;
          margin-bottom: 12px;
        }
        strong {
          color: #1a4d80;
          font-size: 1.2rem;
          display: block;
          margin-bottom: 6px;
        }
        p {
          font-size: 1rem;
          line-height: 1.4;
          color: #555;
        }
      </style>
      <div class="container">
        <h2>Oferta Académica</h2>
        <div class="grid">
          <div class="course-card">
            <img src="https://www.aauniv.com/s/blog/wp-content/uploads/2021/12/que-hace-un-ingeniero-de-sistemas.jpg" alt="Ingeniería en Sistemas" />
            <strong>Ingeniería en Sistemas</strong>
            <p>Desarrollo de software y aplicaciones.</p>
          </div>
          <div class="course-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg" alt="Ingeniería Electrónica" />
            <strong>Ingeniería Electrónica</strong>
            <p>Sistemas embebidos y telecomunicaciones.</p>
          </div>
          <div class="course-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDnoYcFAx5MQG0OiulRKcPmQe415MF_iGwg&s" alt="Ingeniería Civil" />
            <strong>Ingeniería Civil</strong>
            <p>Construcción e infraestructuras.</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('espe-courses', EspeCourses);
