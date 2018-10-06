/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHommy {
    load() {
        fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost").then(rsp => {
            return rsp.json();
        }).then(data => {
            this.articles = data;
            console.log(this.articles);
        }).catch((err) => {
            console.error('Could not load data', err);
        });
    }
    componentWillLoad() {
        console.log('Component is being rendered');
        this.load();
    }
    componentDidLoad() {
        //  this.load();
        console.log('Component has been rendered');
    }
    componentDidUpdate() {
        // this.load();
        console.log('Component did update');
    }
    render() {
        return [
            h("div", { class: "row content" },
                h("div", { class: "col-sm-3 sidenav text-center" },
                    h("stencil-route-link", { url: `/NewArticle` },
                        h("button", { class: "card-link btn btn-success" }, "Ajouter un article "))),
                h("div", { class: "col-sm-9 text-center" },
                    h("article-list", { arts: this.articles })))
        ];
    }
    static get is() { return "app-hommy"; }
    static get properties() { return {
        "articles": {
            "state": true
        },
        "load": {
            "method": true
        }
    }; }
    static get style() { return ".sidenav {\n    padding-top: 20px;\n    background-color: #f1f1f1;\n    \n  }\n\n  /* On small screens, set height to 'auto' for sidenav and grid */\n  \@media screen and (max-width: 767px) {\n    .sidenav {\n      height: auto;\n      padding: 15px;\n    }\n    .row.content {height:auto;} \n  }\n\n  /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n    .row.content {height:100%;}"; }
}
/*
  @Listen('ionInput')
  search(ev) {
    setTimeout(async () => {
      if (ev.target.value.length > 0) {
        try {
          const searchTerm = ev.target.value;
          const data = await chercherArticles(searchTerm);
          this.articles = data.results;
        }
        catch (err) {
          console.error(err);
        }
      }
    }, 500);
  }

@State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  toggleComponent(): void {
      this.toggle = !this.toggle;
      this.onToggle.emit({visible: this.toggle})
  }
  
  Avec onClick={() => this.toggleComponent()
      
      <div class="container-fluid text-center">
          <div class="row content">
            <div class="col-sm-2 sidenav">
              <p><button class="btn btn-default btn-block" >Home</button></p>
              <p><button class="btn btn-default btn-block"  >New post</button></p>
             
            </div>
           
          
            <div class="col-sm-8 text-left">
            
            */

class ArticleList {
    limit(str) {
        if (str === null) {
            return "Text vide";
        }
        else {
            let r = Math.min(141, str.length);
            let point = str.length <= 140 ? "" : "...";
            return str.substring(0, r) + point;
        }
    }
    render() {
        if (this.arts) {
            const articles = this.arts.map((article) => {
                return (h("div", { class: "container" },
                    h("div", { class: "card text-center" },
                        h("div", { class: "card-header" },
                            "Auteur:  ",
                            article.autor),
                        h("div", { class: "card-body" },
                            h("h5", { class: "card-title text-success" }, article.title),
                            h("p", { class: "card-text" }, this.limit(article.article)),
                            " ",
                            h("hr", null),
                            h("stencil-route-link", { url: `/${article._id}` },
                                h("button", { class: "card-link btn btn-success" }, "D\u00E9tails"))),
                        h("div", { class: "card-footer text-muted" }, article.creationDate)),
                    h("br", null)));
            });
            return (h("div", null,
                " ",
                h("br", null),
                "  ",
                articles,
                " "));
        }
        else {
            return (h("div", { class: 'skeleton-list' }));
        }
    }
    static get is() { return "article-list"; }
    static get properties() { return {
        "arts": {
            "type": "Any",
            "attr": "arts"
        }
    }; }
    static get style() { return ".skeleton-list {\n    margin: 1.5em;\n    height: 600px;\n    \n    background-repeat: repeat-y;\n    background-size: 100% 80px, 100% 80px, 20% 80px;\n    background-position: 10px 0, 10px 30px;\n  }\n\n  .ar {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    display: grid;\n  }"; }
}

export { AppHommy, ArticleList };
