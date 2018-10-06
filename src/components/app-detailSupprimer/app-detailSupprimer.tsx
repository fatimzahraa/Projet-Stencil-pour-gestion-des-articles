import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
    tag: 'app-detailSupprimer',
    styleUrl: 'app-detailSupprimer.css'
})


export class AppDetailSupprimer {
    
    @Prop() match: MatchResults;

    @Prop()   retour : RouterHistory;

    @State() artcl :any ;  
        
        load() {
        
          fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/${this.match.params.id}`).then(rsp => {
            return   rsp.json();
        
          }).then(data => {
            this.artcl = data;
            console.log(this.artcl)
        
          }).catch((err) => {
            console.error('Could not load data', err);
          }); 
        }
      
      
        componentWillLoad() { 
          console.log('Component is being rendered');
      
          this.load();
        }

        retourner(){
            this.retour.goBack();
          }

        deleteArticle() {
            return fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost/" + this.match.params.id, {
              method: 'DELETE',headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
              },
            }).then(function(res) {  this.retourner();
              return res.json();
            })
              .then(function(data) {
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
              if(this.artcl != null) {
              return (
                  
                  <div class="container">
                    <div class="xx">
                  
                  <div class="card text-center">
                          <div class="card-header">
                              Auteur:  {this.artcl.autor}
                          </div>
                      <div class="card-body">
                          <h5 class="card-title text-success">{this.artcl.title}</h5>
                          <p class="card-text">{this.artcl.article}</p>
      
                        
                        
                          
                      </div>
                      <div class="card-footer text-muted">
                          {this.artcl.creationDate} <br></br><br></br>

                          <div class="btn-group">

                          <stencil-route-link url="/" >  
                            <button class="card-link btn btn-success" >Retour</button> 
                         </stencil-route-link>


                        <stencil-route-link url="/" > 
                         <button class="btn btn-danger" onClick={() => this.deleteArticle()} > Supprimer</button>
                         </stencil-route-link>


                        <stencil-route-link url={"/editer/" + this.artcl._id}>
                        
                                 <button class="btn btn-info">Edit</button>
                  
                        </stencil-route-link>
                        </div>

                         
                        

                      </div>
                  </div>
                  </div>
                 
                  <br></br>
      
                  </div>
      
      
                  
              
              )
        
        }
            
          }
        }
        