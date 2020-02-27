# module File

````
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
   // 声明模块里有什么东西 只能声明：组件/指令/管道
    AppComponent,
    HeroesComponent
  ],
  // 声明该模块所依赖的模块
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // 默认情况下是空的
  providers: [],
  // 声明模块的主组件是什么
  bootstrap: [AppComponent]
})
export class AppModule { }

````