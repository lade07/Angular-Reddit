import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  domain(): string { 
    try { 
      // e.g. http://foo.com/path/to/bar 
      const domainAndPath: string = this.link.split('//')[1]; 
      // e.g. foo.com/path/to/bar 
      return domainAndPath.split('/')[0]; 
    } catch (err) { 
      return null; 
    } 
  }
}



