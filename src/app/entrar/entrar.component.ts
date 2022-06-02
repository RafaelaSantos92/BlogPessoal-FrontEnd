import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { userLogin } from '../model/userLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: userLogin = new userLogin()

  constructor(
    private auth: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe({
      next: (resp: userLogin) => {
        this.userLogin = resp
        environment.nome = this.userLogin.nome;
        environment.id = this.userLogin.id;
        environment.foto = this.userLogin.foto;
        environment.token = this.userLogin.token;
        
        this.router.navigate(['/inicio'])
      },
      error: erro=> {
        if(erro.status == 401) {
          alert('Usuário ou senha inválidos')
        }
      }
    })
  }



}
