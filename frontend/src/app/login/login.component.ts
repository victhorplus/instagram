import { Component, OnInit } from '@angular/core';

import { LoginService } from '../servicos/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginService: LoginService;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginService = new LoginService();
  }

  verificar(){
    let logado = this.loginService.estouLogado();
    if(logado){
      this.router.navigate(['/home']);
    }else{
      alert("usuário nao existe")
    }
  }
}
