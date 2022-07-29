import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: any[];
  next: string;
  prev: string;
  error: string;
  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) {
    this.clients = [];
    this.next = "";
    this.prev = "";
    this.error = "";
  }

  async ngOnInit(): Promise<any> {
    try {
      const response = await this.clientsService.getAll();
      this.clients = response.result;
      this.next = response.info.next;
      this.prev = response.info.prev;
    } catch (err: any) {
      this.error = err.message;
      localStorage.removeItem('token_gym');
      this.router.navigate(['/login'])
    }
  }

}
