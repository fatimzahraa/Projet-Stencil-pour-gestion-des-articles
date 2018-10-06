/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppDetailSupprimer {
    load() {
        fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/${this.match.params.id}`).then(rsp => {
            return rsp.json();
        }).then(data => {
            this.artcl = data;
            console.log(this.artcl);
        }).catch((err) => {
            console.error('Could not load data', err);
        });
    }
    componentWillLoad() {
        console.log('Component is being rendered');
        this.load();
    }
    retourner() {
        this.retour.goBack();
    }
    deleteArticle() {
        return fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost/" + this.match.params.id, {
            method: 'DELETE', headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
        }).then(function (res) {
            this.retourner();
            return res.json();
        })
            .then(function (data) {
            console.log(JSON.stringify(data));
        });
    }
    /* @Method()
     loadArticle(id: string) {
     
       fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/Detail/?id=${id}`).then(rsp => {
         return   rsp.json();
     
       }).then(data => {
         this.article = data;
         console.log(this.article)
     
       }).catch((err) => {
         console.error('Could not load data', err);
       });
     }
   
     componentWillLoad() {
       console.log('Component is being rendered')
       const data = this.loadArticle(this.match.params.id);
        //this.article = data.results[0];
        console.log(data);
     }  */
    /*<stencil-route-link url="/SupprimerArticle" >
                               <button class="card-link btn btn-danger" >Supprimer article</button>
                            </stencil-route-link> */
    render() {
        if (this.artcl != null) {
            return (h("div", { class: "container" },
                h("div", { class: "xx" },
                    h("div", { class: "card text-center" },
                        h("div", { class: "card-header" },
                            "Auteur:  ",
                            this.artcl.autor),
                        h("div", { class: "card-body" },
                            h("h5", { class: "card-title text-success" }, this.artcl.title),
                            h("p", { class: "card-text" }, this.artcl.article)),
                        h("div", { class: "card-footer text-muted" },
                            this.artcl.creationDate,
                            " ",
                            h("br", null),
                            h("br", null),
                            h("stencil-route-link", { url: "/" },
                                h("button", { class: "card-link btn btn-success" }, "Retour")),
                            h("stencil-route-link", { url: "/" },
                                h("button", { class: "btn btn-danger", onClick: () => this.deleteArticle() }, " Supprimer")),
                            h("stencil-route-link", { url: "/editer/" + this.artcl._id },
                                h("button", { class: "btn btn-info" }, "Edit"))))),
                h("br", null)));
        }
    }
    static get is() { return "app-detail"; }
    static get properties() { return {
        "artcl": {
            "state": true
        },
        "match": {
            "type": "Any",
            "attr": "match"
        },
        "retour": {
            "type": "Any",
            "attr": "retour"
        }
    }; }
    static get style() { return ".xx{\n\n    padding-top: 200px;\n    padding-bottom: 200px;\n}"; }
}

export { AppDetailSupprimer as AppDetail };
