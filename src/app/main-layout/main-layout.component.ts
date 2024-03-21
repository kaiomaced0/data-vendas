import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, SidebarModule, MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  constructor(private router: Router) {}

  visibleSidebar1!: boolean;

  irParaHome() {
    this.router.navigate(['']);
  }
  irParaConta() {
    this.router.navigate(['conta']);
  }
}
