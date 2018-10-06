

import {Component, State, Prop} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";

@Component({
    tag: 'editer-article',
    styleUrl: 'editer-article.css'
})


export class EditerArticle {
  @State()  title: string;
  @State()  article: string;
  @State()  author: string;
  @State()  _id : any;
  @State()  myArticl:any;
  @Prop()   retour : RouterHistory;
  @Prop()   match : MatchResults;

  retourner(){
    this.retour.goBack();
  }


  componentWillLoad() {
    let id = this.match.params.id;
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id)
      .then(response =>response.json()).
    then(data=>{
      this.myArticl=data;
      console.log(this.myArticl)
      this.title = this.myArticl.title;
      this.article = this.myArticl.article;
      this.author = this.myArticl.autor;
      this._id = this.myArticl._id;
    })
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
      .then(function(res) { this.retourner();
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  }

  render() {
    return (
    
        <div class="container frm">
        <br></br><br></br> 
        <h2 class="text-center text-info"><b>Modifier cette Article</b></h2>
        
        <form class="form-horizontal">

    <div class="form-group">
      <label class="control-label col-sm-4" >Nom de l'auteur:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="autor"  name="autor" value={this.author} onInput={(e:any) => (this.author= e.target.value)}/>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-4">Titre de l'article:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" id="titre"    value={this.title} onInput={(e:any) => (this.title = e.target.value)} name="titre"/>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-2">Description:</label>
      <div class="col-sm-10">           
        <textarea class="form-control" id="descrption" onInput={(e:any) => (this.article = e.target.value)} 
        value={this.article}
         name="description"></textarea> 
      </div>
    </div>

       <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
      
      <stencil-route-link url="/" class="center">  
        <button type="submit" class="btn btn-success" onClick={this.editArticle.bind(this)}> Modifier </button>
        </stencil-route-link>

        <button type="reset" class="btn btn-danger" value="Reset">Cancel</button>
      </div>
    </div>
    
  </form>   

  <stencil-route-link url="/" class="center">  
        <button class="card-link btn btn-info" >Retour</button> 
    </stencil-route-link>
        <br></br> <br></br>

</div>   
               
                      
                  

    );
  }
}