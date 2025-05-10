import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

    constructor(private readonly nagivate: ActivatedRoute,
        private readonly router: Router
    ){

    }

    ngOnInit(): void {

        
    }

}
