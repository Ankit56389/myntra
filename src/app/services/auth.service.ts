import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {

  }
}

//   async signin(email:string, password:string){
//     await this.firebaseAuth.signInWithEmailAndPassword(email,password)
//     .then(res=>{
//       this.isLoggedIn=true
//       localStorage.setItem('user',JSON.stringify(res.user))
//     })
//   }

//   async signup(email:string, password:string){
//     await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
//     .then(res=>{
//       this.isLoggedIn=true
//       localStorage.setItem('user',JSON.stringify(res.user))
//     })
//   }

//   logout(){
//     this.firebaseAuth.signOut()
//     localStorage.removeItem('user')
//   }
// }
