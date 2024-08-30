import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pagamento } from '../../../models/pagamento.models';
import { PagamentoService } from '../../../services/pagamento/pagamento.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagamentos-list',
  standalone: true,
  imports: [MatIcon, MatButton, MatTableModule, MatPaginatorModule],
  templateUrl: './pagamentos-list.component.html',
  styleUrl: './pagamentos-list.component.css'
})
export class PagamentosListComponent implements OnInit {

  constructor(private router: Router, private service: PagamentoService, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  pageSize = 20;
  page = 1;
  totalRecords = 0;
  pagamentos: Pagamento[] = [];
  
  ngOnInit() {
    this.service.list(this.page, this.pageSize).subscribe((data: Pagamento[]) => {
      this.pagamentos = data;
    });
    this.service.listSize().subscribe((data: number) => {
      this.totalRecords = data;
    })
  }
  
  paginar(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.ngOnInit();
  }

  editarPagamentos(produtoId: number) {
    this.router.navigate(['pagamentos/edit']);
  }

}
