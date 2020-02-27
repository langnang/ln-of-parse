# ng-module

Ng-Module

angular.json-->{
    "index": "src/index.html",
    "main": "src/main.ts"
}

src/index.html
|---<app-root></app-root>

src/main.ts
|---import { AppModule } from './app/app.module';

src/app/app.module.ts
|---import { AppRoutingModule } from './app-routing.module';
|---import { AppComponent } from './app.component';

src/app/app-routing.module

src/app/app.component.ts-->{
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
}
