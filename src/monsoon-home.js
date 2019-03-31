import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
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
        .container img {
          width: 200px;
          height: 200px;
        }
        .body{
          margin-top: 100px;
        }
        .body .container {
          display: grid;
          grid-template-columns: 200px 200px 200px 200px 200px;
          grid-template-rows: 200px 200px 200px 200px 200px;
          grid-column-gap: 12px;
          grid-row-gap: 12px;
        }
      </style>

<div class="header">
  <h1>
    <a href="/" class="logo">Monsoon Brands</a>
  </h1>
</div>
<div class="body">
  <section class="container">
      <img src="./images/products/slant-glass.jpg">
      <img src="./images/products/watermellon-knife.jpg">
      <img src="./images/products/milk-box.jpg">
      <img src="./images/products/cotton-buds.jpg">
      <img src="./images/products/door-jam.png">
      <img src="./images/products/fruit-infuser.jpg">
      <img src="./images/products/mango-slicer.jpeg">
      <img src="./images/products/dip-jar.jpg">
      <img src="./images/products/lens-mug.jpg">
      <img src="./images/products/potato-ricer.jpg">
      <img src="./images/products/coffee-grinder.jpg">
      <img src="./images/products/wine-aerator.jpg">
      <img src="./images/products/pizza-cutter.jpg">
      <img src="./images/products/icepop-bags.png">
      <img src="./images/products/pasta-measurer.jpg">

      
  </section>
</div>
    `;
  }
}

window.customElements.define('monsoon-home', MonsoonHome);
