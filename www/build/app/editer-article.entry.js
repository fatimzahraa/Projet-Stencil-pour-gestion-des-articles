/*! Built with http://stenciljs.com */
const { h } = window.App;

class EditerArticle {
    retourner() {
        this.retour.goBack();
    }
    componentWillLoad() {
        let id = this.match.params.id;
        fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/' + id)
            .then(response => response.json()).
            then(data => {
            this.myArticl = data;
            console.log(this.myArticl);
            this.title = this.myArticl.title;
            this.article = this.myArticl.article;
            this.author = this.myArticl.autor;
            this._id = this.myArticl._id;
        });
    }
    editArticle(e) {
        e.preventDefault();
        console.log("!");
        const title = this.title;
        const article = this.article;
        const autor = this.author;
        const _id = this._id;
        const postedited = {
            _id,
            title,
            article,
            autor
        };
        fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
            method: "PUT",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postedited)
        })
            .then(function (res) {
            this.retourner();
            return res.json();
        })
            .then(function (data) {
            console.log(JSON.stringify(data));
        });
    }
    render() {
        return (h("div", { class: "container frm" },
            h("br", null),
            h("br", null),
            h("h2", { class: "text-center text-info" },
                h("b", null, "Modifier cette Article")),
            h("form", { class: "form-horizontal" },
                h("div", { class: "form-group" },
                    h("label", { class: "control-label col-sm-4" }, "Nom de l'auteur:"),
                    h("div", { class: "col-sm-10" },
                        h("input", { type: "text", class: "form-control", id: "autor", name: "autor", value: this.author, onInput: (e) => (this.author = e.target.value) }))),
                h("div", { class: "form-group" },
                    h("label", { class: "control-label col-sm-4" }, "Titre de l'article:"),
                    h("div", { class: "col-sm-10" },
                        h("input", { type: "text", class: "form-control", id: "titre", value: this.title, onInput: (e) => (this.title = e.target.value), name: "titre" }))),
                h("div", { class: "form-group" },
                    h("label", { class: "control-label col-sm-2" }, "Description:"),
                    h("div", { class: "col-sm-10" },
                        h("textarea", { class: "form-control", id: "descrption", onInput: (e) => (this.article = e.target.value), value: this.article, name: "description" }))),
                h("div", { class: "form-group" },
                    h("div", { class: "col-sm-offset-2 col-sm-10" },
                        h("stencil-route-link", { url: "/", class: "center" },
                            h("button", { type: "submit", class: "btn btn-success", onClick: this.editArticle.bind(this) }, " Modifier ")),
                        h("button", { type: "reset", class: "btn btn-danger", value: "Reset" }, "Cancel")))),
            h("stencil-route-link", { url: "/", class: "center" },
                h("button", { class: "card-link btn btn-info" }, "Retour")),
            h("br", null),
            " ",
            h("br", null)));
    }
    static get is() { return "editer-article"; }
    static get properties() { return {
        "_id": {
            "state": true
        },
        "article": {
            "state": true
        },
        "author": {
            "state": true
        },
        "match": {
            "type": "Any",
            "attr": "match"
        },
        "myArticl": {
            "state": true
        },
        "retour": {
            "type": "Any",
            "attr": "retour"
        },
        "title": {
            "state": true
        }
    }; }
    static get style() { return "form{\n    margin:100px;\n    padding: 30px;\n    border: solid 1px lightgrey;\n    border-radius: 20px;\n    height: 100%;\n}\n\n.space{\n\n    margin-left:30%;\n    margin-left:50%;\n}"; }
}

export { EditerArticle };
