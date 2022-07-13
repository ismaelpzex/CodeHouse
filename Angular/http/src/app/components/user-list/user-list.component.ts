import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  currentPage: number = 0;
  totalPage: number = 0;
  constructor(private userService: UsersService) { }

  async ngOnInit(): Promise<void> {
    let response = await this.userService.getByPage();
    this.currentPage = response.page;
    this.totalPage = response.total_pages;
    this.users = response.data;
  }

  async goToPage(page: number): Promise<void> {
    let response: any = await this.userService.getByPage(page);
    this.currentPage = response.page;
    this.users = response.data;
  }
}
