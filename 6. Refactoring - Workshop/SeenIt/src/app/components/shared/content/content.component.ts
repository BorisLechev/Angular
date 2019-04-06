import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, DoCheck {
  isLoggedIn: boolean; // трябва ни DoCheck

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isLoggedIn = this.authService.isAuthenticated()  // проверява в localStorage дали токена ми е null auth.service
  }
}
