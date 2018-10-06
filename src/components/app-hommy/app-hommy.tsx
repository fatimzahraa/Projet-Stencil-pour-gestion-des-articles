import { Component, Method, State} from '@stencil/core';


@Component({
    tag: 'app-hommy',
    styleUrl: 'app-hommy.css'
})
export class AppHommy {

    /*
    @Prop({ context: 'isServer' }) private isServer: boolean;
  
   async componentWillLoad() {
      if (!this.isServer) {
        const response =  await fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost`);
        const data = await response.json();
        this.articles= data.results;
      }
    }*/


    

        // Indicate that name should be a public property on the component
        @State() articles :any[] ;  
        
        @Method()
        load() {
        
          fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost").then(rsp => {
            return   rsp.json();
        
          }).then(data => {
            this.articles = data;
            console.log(this.articles)
        
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
                  
                  <div class="row content">
                    <div class="col-sm-3 sidenav text-center">
                     
                     <stencil-route-link url={`/NewArticle`} >  
                        <button class="card-link btn btn-success" >Ajouter un article </button> 
                      </stencil-route-link>

                      
                    </div>
                     
                    <div class="col-sm-9 text-center">
                        <article-list arts={this.articles}></article-list>
                    </div> 
                  </div>             
            ];
        }
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
     
    
    