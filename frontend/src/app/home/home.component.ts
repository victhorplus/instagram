import { Component, OnInit } from '@angular/core';

import { User } from '../model/user'
import { Postagem } from '../model/postagem'

import { UserService } from '../servicos/user.service'
import { PostagemService } from '../servicos/postagem.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  postagem = [
    {'img':'../../assets/imagens/img1', 'owner':'Daniel', 'description':'aqui jax uma desricao', 'likes': ['Saniel', 'Aniel']},
    {'img':'../../assets/imagens/img2', 'owner':'Saniel', 'description':'aqui jax uma desricao', 'likes': ['Daniel', 'Aniel']},
    {'img':'../../assets/imagens/img3', 'owner':'Aniel', 'description':'aqui jax uma desricao', 'likes': ['Daniel', 'Saniel']},
  ]
  
  constructor(
    private userService: UserService,
    private postagemService: PostagemService
  ) { }

  ngOnInit(): void {
    // this.getPostagem();
    // console.log(this.postagem)
  }

  getUser(userApelido): User{
    
    var usuario = <User> {"nome": "Usuario 01", "apelido": userApelido, "senha": "123456", "email": "user01@gmail.com", "foto": "../../assets/imagens/user.png"}
    return usuario;
    
    // Código quando dados tiverem vindo da api 
    /*
    var usuario: User;
    this.userService.getUser(userApelido).subscribe(user => usuario = user)
    return usuario;
    */
  }

  getPostagem(): void{
    this.postagemService.getPostagens().subscribe(postagem => this.postagem = postagem)
  }

}
