
import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  

  render() {
    return (
            <div> 
           <header class="bg-info text-white">
             <h1><b>Blog d'Articles</b></h1>
           </header>
        
          
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>

              

              <stencil-route url='/' component='app-hommy' exact={true} />

              <stencil-route url='/NewArticle' component='new-article' exact={true} />
            
              <stencil-route url='/editer/:id' component='editer-article'  />
              
              <stencil-route url='/:id' component='app-detailSupprimer' />

            
              
            </stencil-route-switch>
          </stencil-router>
        </main>
     

          <footer class="container-fluid text-center">
                    <p>@2018 DOSI </p>
            </footer>
           
        </div>

        
    );
  }
}