/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppRoot {
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null, "Stencil App Starter")),
            h("main", null,
                h("stencil-router", null,
                    h("stencil-route-switch", { scrollTopOffset: 0 },
                        h("stencil-route", { url: '/', component: 'app-home', exact: true }),
                        h("stencil-route", { url: '/profile/:name', component: 'app-profile' }))))));
    }
    static get is() { return "app-root"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "header {\n  background: #5851ff;\n  color: white;\n  height: 56px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\nh1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: #fff;\n  padding: 0 12px;\n}"; }
}

export { AppRoot };
