import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tema } from 'src/app/model/tema';
import { temaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: tema = new tema()

  constructor(
    private temaService: temaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ""){
      alert("Sua seção expirou, faça o login novamente!")
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)

  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: tema) => {
      this.tema = resp
    })
  }

  atualizar(){
    this.temaService.putTema(this.tema).subscribe((resp: tema) => {
      this.tema = resp
      alert('Tema atualizado com sucesso!')
      this.router.navigate(['/tema'])
    })

  }

}
