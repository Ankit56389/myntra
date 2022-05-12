import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CartComponent } from './components/cart/cart.component';
import { MatBadgeModule} from '@angular/material/badge';
import { SignupComponent } from './components/signup/signup.component';
import {HttpClientModule}  from'@angular/common/http';
import { AuthService } from './services/auth.service';
// import { initializeApp } from "firebase/app";


// import { NgImageSliderComponent } from 'ng-image-slider';
const firebaseConfig = {
  apiKey: "AIzaSyDLt9EEoBwFyLYnknXIRamFa38da9Rp9KE",
  authDomain: "authentication-8dd6c.firebaseapp.com",
  projectId: "authentication-8dd6c",
  storageBucket: "authentication-8dd6c.appspot.com",
  messagingSenderId: "177235428464",
  appId: "1:177235428464:web:24a88272f4cd5c7242e0b5"
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    LoginComponent,
    NavigationComponent,
    CartComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    MatBadgeModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
