/*! Built with http://stenciljs.com */
const { h } = window.App;

class MyApp {
    render() {
        return (h("div", null,
            h("header", { class: "bg-info text-white" },
                h("h1", null,
                    h("b", null, "Blog d'Articles"))),
            h("main", null,
                h("stencil-router", null,
                    h("stencil-route-switch", { scrollTopOffset: 0 },
                        h("stencil-route", { url: '/', component: 'app-hommy', exact: true }),
                        h("stencil-route", { url: '/NewArticle', component: 'new-article', exact: true }),
                        h("stencil-route", { url: '/editer/:id', component: 'editer-article' }),
                        h("stencil-route", { url: '/:id', component: 'app-detailSupprimer' })))),
            h("footer", { class: "container-fluid text-center" },
                h("p", null, "@2018 DOSI "))));
    }
    static get is() { return "my-app"; }
    static get style() { return "/* Set black background color, white text and some padding */\nfooter {\n    background-color: #555;\n    color: white;\n    padding: 10px;\n  }\n\n  header h1{\n    margin-left: 200px;\n  }"; }
}

export { MyApp };
