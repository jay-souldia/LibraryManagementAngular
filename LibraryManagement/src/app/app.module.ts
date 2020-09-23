import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { BorrowingComponent } from './components/borrowing/borrowing.component';
import { CloseBorrowingComponent } from './components/close-borrowing/close-borrowing.component';
import { CreateBorrowingComponent } from './components/create-borrowing/create-borrowing.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowOneBorrowingComponent } from './components/show-one-borrowing/show-one-borrowing.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomePageComponent,
    MenuComponent,
    BorrowingComponent,
    CloseBorrowingComponent,
    CreateBorrowingComponent,
    FooterComponent,
    ShowOneBorrowingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
