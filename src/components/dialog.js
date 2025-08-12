// dialog.js
class EspeDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
      <dialog class="mdl-dialog">
        <h4 class="mdl-dialog__title">Diálogo ESPE</h4>
        <div class="mdl-dialog__content">
          <p>Este es un diálogo modal personalizado.</p>
        </div>
        <div class="mdl-dialog__actions">
          <button type="button" class="mdl-button close">Cerrar</button>
        </div>
      </dialog>
    `;

    this.dialog = this.shadowRoot.querySelector('dialog');
    this.shadowRoot.querySelector('.close').addEventListener('click', () => this.close());
  }

  open() {
    this.dialog.showModal();
  }

  close() {
    this.dialog.close();
  }
}

customElements.define('espe-dialog', EspeDialog);
 