import { Component } from '@stencil/core';


@Component({
    tag: 'new-article',
    styleUrl: 'new-article.css'
})
export class NewArticle {

  title: string;
  article: string;
  author: string;

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
      .then(function(res) {
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
  <h2 class="text-center text-info"><b>Ajouter un nouveau Article</b></h2> 
  <form class="form-horizontal">
    <div class="form-group">
      <label class="control-label col-sm-4" >Nom de l'auteur:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="autor" placeholder="Enter le nom d'auteur" name="autor" value="" onChange={(e:any) => (this.author= e.target.value)}/>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-4">Titre de votre article:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" id="titre" placeholder="Enter le titre de l'article"  value="" onChange={(e:any) => (this.title = e.target.value)} name="titre"/>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-2">Description:</label>
      <div class="col-sm-10">           
        <textarea class="form-control" id="descrption" onChange={(e:any) => (this.article = e.target.value)} 
        placeholder="Saisissez le contenu de votre article" 
         name="description"></textarea> 
      </div>
    </div>
  
    

    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
      
      <stencil-route-link url="/" class="center">  
        <button type="submit" class="btn btn-success" onClick={this.postArticle.bind(this)}> Ajouter </button>
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