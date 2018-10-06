/*! Built with http://stenciljs.com */
const { h } = window.App;

class SuppArticle {
    constructor() {
        this.message = " ";
    }
    componentWillLoad() {
        console.log("L'Article est en train de supprimé !");
        fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/${this.match.params.id}`, { method: 'DELETE' }).then(response => {
            if (response.ok) {
                this.message = "Article est supprimé";
                console.log(this.message);
            }
            else {
                this.message = "Erreur de suppression";
                console.log(this.message);
            }
        });
        this.history.goBack();
    }
    render() {
        if (this.match && this.match.params.id)
            return;
    }
    static get is() { return "supp-article"; }
    static get properties() { return {
        "artcl": {
            "state": true
        },
        "history": {
            "type": "Any",
            "attr": "history"
        },
        "match": {
            "type": "Any",
            "attr": "match"
        },
        "message": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

export { SuppArticle };
