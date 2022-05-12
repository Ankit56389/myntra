import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
// import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login' ,  component:LoginComponent },
  { path: 'navigation' ,  component:NavigationComponent },
  { path: 'header',  component:HeaderComponent },
  { path: 'cart',   component:CartComponent },
  { path: 'signup', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
