import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

class MonsoonBrands extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <monsoon-home name="home"></monsoon-home>
        <monsoon-about name="about"></monsoon-about>
        <monsoon-contact name="contact"></monsoon-contact>
        <my-view404 name="view404"></my-view404>
      </iron-pages>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'home';
    } else if (['home', 'about', 'contact'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'home':
        import('./monsoon-home.js');
        break;
      case 'about':
        import('./monsoon-about.js');
        break;
      case 'contact':
        import('./monsoon-conact.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
} window.customElements.define('monsoon-brands', MonsoonBrands);
