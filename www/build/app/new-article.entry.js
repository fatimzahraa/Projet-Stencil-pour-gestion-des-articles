/*! Built with http://stenciljs.com */
const { h } = window.App;

class NewArticle {
    postArticle(e) {
        e.preventDefault();
        console.log("!");
        const title = this.title;
        const article = this.article;
        const autor = this.author;
        const payload = {
            title,
            article,
            autor
        };
        fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(function (res) {
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
                h("b", null, "Ajouter un nouveau Article")),
            h("form", { class: "form-horizontal" },
                h("div", { class: "form-group" },
                    h("label", { class: "control-label col-sm-4" }, "Nom de l'auteur:"),
                    h("div", { class: "col-sm-10" },
                        h("input", { type: "text", class: "form-control", id: "autor", placeholder: "Enter le nom d'auteur", name: "autor", value: "", onChange: (e) => (this.author = e.target.value) }))),
                h("div", { class: "form-group" },
                    h("label", { class: "control-label col-sm-4" }, "Titre de votre article:"),
                    h("div", { class: "col-sm-10" },
                        h("input", { type: "text", class: "form-control", id: "titre", placeholder: "Enter le titre de l'article", value: "", onChange: (e) => (this.title = e.target.value), name: "titre" }))),
                h("div", { class: "form-group" },
                    h("label", { class: "control-label col-sm-2" }, "Description:"),
                    h("div", { class: "col-sm-10" },
                        h("textarea", { class: "form-control", id: "descrption", onChange: (e) => (this.article = e.target.value), placeholder: "Saisissez le contenu de votre article", name: "description" }))),
                h("div", { class: "form-group" },
                    h("div", { class: "col-sm-offset-2 col-sm-10" },
                        h("stencil-route-link", { url: "/", class: "center" },
                            h("button", { type: "submit", class: "btn btn-success", onClick: this.postArticle.bind(this) }, " Ajouter ")),
                        h("button", { type: "reset", class: "btn btn-danger", value: "Reset" }, "Cancel")))),
            h("stencil-route-link", { url: "/", class: "center" },
                h("button", { class: "card-link btn btn-info" }, "Retour")),
            h("br", null),
            " ",
            h("br", null)));
    }
    static get is() { return "new-article"; }
    static get style() { return "form{\n    margin:100px;\n    padding: 30px;\n    border: solid 1px lightgrey;\n    border-radius: 20px;\n    height: 100%;\n}\n\n.space{\n\n    margin-left:30%;\n    margin-left:50%;\n}"; }
}

export { NewArticle };
