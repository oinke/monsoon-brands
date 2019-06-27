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
          background-color: #15121f;
          width: 100%;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          padding: 12px 24px 12px 24px;
          position: fixed;
          width: 100%;
          top: 0;
          flex-direction: column;
          z-index: 1;
        }
        h1 a {
          background: url(./images/monsoon-brands-2.png);
          background-size: contain;
          display: block;
          text-indent: -1000em;
          background-repeat: no-repeat;
          width: 311px;
          border-radius: 50px;
        }
        .container img {
          width: 200px;
          height: 200px;
        }
        .body{
          width: 100%;
        }
        .body .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
          grid-gap: 12px;
          grid-auto-flow: dense;
        }
        .navItems {
          float: right;
          margin-right: 50px;
          margin-top: -28px;
          flex: 1;
        }
        .navItems a {
          font-family: 'Roboto', sans-serif;
          letter-spacing: 1px;
          font-weight: bold;
          font-style: normal;
          font-size: 12px;
          opacity: 1;
          visibility: visible;
          color: #e09b30;
          text-decoration: none;
        }
        .intro img{
          width: 100%;
        }
        .logo {
          width: 135px;
        }
        .container {
          justify-content: center;
          padding-top: 35px;
        }
        .innovation {
          justify-content: center;
          display: flex;
          height: 153px;
          padding-top: 35px;
        }
        .innovationLeft{
          flex: 1;
          background-color: #5a5655;
          float: right;
          text-align: right;
          display: flex;
          flex-direction: column;
          padding-right: 5px;
          margin: auto;
          min-height: 200px;
        }
        .innovationRight {
          flex: 1;
          background-color: #151220;
          display: flex;
          flex-direction: column;
          padding-left: 5px;
          margin: auto;
          min-height: 200px;
        }
        .overlay {
          position: absolute;
          border-radius: 25px;
          background-color: #4844449c;
          margin-top: -50%;
          margin-left: 5%;
          width: 35%;
          height: 40%;
          min-width: 350px;
          z-index: 0;
          color: #ffffff;
          text-align: center;
          max-height: 250px;
        }
        .strongText {
          color: white;
          font-family: 'Roboto', sans-serif;
          letter-spacing: 1px;
          font-weight: bold;
          font-style: normal;
          font-size: 35px;
        }
        .lightText {
          color: white;
          padding-top: 4px;
        }
        .bannerText {
          color: white;
          font-family: 'Roboto', sans-serif;
          letter-spacing: 1px;
          font-weight: bold;
          font-style: normal;
          font-size: 35px;
        }
        .purpose {
          background-color: white;
          height: 100%;
          display: flex;
          flex-direction: row;
        }
        .purposeContent {
          flex: 1;
          padding-top: 45px;
          text-align: center;
          padding-left: 15px;
          padding-right: 15px;
          width: 100%;
          margin-top: 5%;
        }
        .footer {
          margin-top: 5%;
          margin-bottom: 5%
          height: 100%;
          background-color: #151220;
          display: flex;
          flex-direction: row;
        }
        .footerItem {
          margin-top: 5%;
          padding-left: 15px;
          margin-bottom: 5%;
          flex: 1;
          color: white;
        }
      </style>

<div class="header">
  <div class="logo">
    <h1>
      <a href="/" class="logo">Monsoon Brands</a>
    </h1>
  </div>
  <!--<div class="navItems">
    <a href="/what-we-do">what we do</a> |
    <a href="/who-we-are">who we are</a> |
    <a href="/join-our-team">join our team</a> |
    <a href="/contact">connect</a>
  </div>-->
</div>
<div class="body">
  <section class="intro">
      <img src="./images/storm1.jpg" />
      <div class="overlay">
      <p class="bannerText">Building Your Brand </p>
      <p style="margin-left: 10px; margin-right: 10px;">For 32 years, Monsoon Brands has been retailing brands to enhance and market their presence in both brick and mortar stores and across the top Internet sales channels.</p>
      </div>
  </section>
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
  <section class="innovation">
    <div class="innovationLeft"><span class="strongText">Innovators In</span><span class="lightText"> Receive Better Data   </span></div>
    <div class="innovationRight"><span class="strongText"> Marketplace Retail</span> <span class="lightText">Make Better Decisions </span></div>
  </section>
  <div class="purpose">
    <div class="purposeContent"><img src="./images/clean.png" /><br><strong>CLEAN UP & ENFORCE</strong><br>Automate, monitor, and enforce your MAP policy, while unmasking unauthorized 3rd party sellers. We believe in clean and consistent listings. MAPWatch, our MAP solution, makes it easy by automating the process of monitoring sellers across channels such as Amazon, Google Shopping, and eBay. Collaborate with our legal partner and secure your brand integrity.</div>
    <div class="purposeContent"><img src="./images/enhance.png" /><br><strong>ENHANCE</strong><br>Monsoon’s Production team is fully equipped to provide each of your listings with the precision and care they deserve. This includes both studio and lifestyle images of your product, detailed bullet points and descriptions, and even video. All material is created to represent your product in an accurate and satisfying format for both you and the consumer.</div>
    <div class="purposeContent"><img src="./images/manage.png" /><br><strong>MANAGE</strong><br>With your products successfully represented on Amazon.com, Monsoon Brands continues to monitor and protect your brand. We stay vigilant for any unauthorized sellers or inaccurate information on your page, keeping listings clean and accurate. Monsoon Brands even has a team dedicated entirely to advertising your products, generating additional sales.</div>
  </div>
  <div class="footer">
    <div class="footerItem"><img src="./images/monsoon-brands-2.png" style="border-radius: 50px; width="100%"></div>
    <div class="footerItem"></div>
    <div class="footerItem"></div>
    <div class="footerItem"><strong>CONTACT</strong><br>Monsoon Brands<br>18250 N Cave Creek Rd<br>Phoenix, AZ, 85260<br>info@monsoonbrands.com<br>480-262-6215</div>
  </div>
</div>
    `;
  }
}

window.customElements.define('monsoon-home', MonsoonHome);
