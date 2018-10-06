import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'article-list',
  styleUrl: 'article-list.css'
})
export class ArticleList {

  @Prop() arts: any[];
 
  limit(str: string) {
    if(str===null){
      return "Text vide"
    } 
    
    else {
      let r = Math.min(141, str.length);
      let point = str.length <= 140 ? "" : "...";
      return str.substring(0, r) + point;
    }

  }
 


  render() {
    if (this.arts) {
      const articles = this.arts.map((article : any ) => {
        

        return (
            

            <div class="container">
            
 
            <div class="card text-center">
                    <div class="card-header">
                        Auteur:  {article.autor}
                    </div>
                <div class="card-body">
                    <h5 class="card-title text-success">{article.title}</h5>
                    <p class="card-text">{this.limit(article.article)}</p> <hr></hr>

                    <stencil-route-link url={`/${article._id}`} >  
                        <button class="card-link btn btn-success" >Détails</button> 
                    </stencil-route-link> 

                
      
                    
                </div>
                <div class="card-footer text-muted">
                    {article.creationDate}
                </div>
            </div>
            <br></br>

            </div>

        
         
        )
      });

      return (
        <div> <br></br>  {articles} </div>
        
      );
    } else {
      return (
        <div class='skeleton-list'></div>
      );
    }
  }
}