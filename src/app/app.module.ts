import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { CartitemComponent } from './cart/cartitem/cartitem.component';
import { CoverComponent } from './cover/cover.component';

@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent, HeaderComponent, CartComponent, CartitemComponent, CoverComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}