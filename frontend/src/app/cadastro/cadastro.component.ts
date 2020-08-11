import { Component, OnInit } from '@angular/core';

import { User } from '../model/user'
import { UserService } from '../servicos/user.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user: User;
  foto;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  fileChange(event){
    if(event.target.files[0]){
      this.foto = event.target.files[0];
    }
  }

  cadastrar(user: User){
    this.user = user;
    user.foto = this.foto;
    console.log(user)
    this.userService.postUser(this.user).subscribe( result => console.log(result))
  }

}
