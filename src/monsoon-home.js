import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MonsoonHome extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
          background-color: white;
          height: 100vh;
          padding: 0;
          padding-top: 48px;
        }
        h1 {
          margin: 0;
          text-indent: -1000em;
        }
        .header{
          background-color: #F8F8F8;
          width: 400px;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          padding: 24px;
        }
        h1 a {
          background: url(./images/monsoon-brands.svg);
          background-size: cover;
          width: 255px;
  
          display: block;
          text-indent: -1000em;
        }
      </style>

<div class="header">
  <h1>
    <a href="/">Monsoon Brands</a>
  </h1>
</div>
    `;
  }
}

window.customElements.define('monsoon-home', MonsoonHome);
