import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() myUser: User | any;
  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
  }

  async DeleteUser(id: number): Promise<void> {
    try {
      let response = await this.userService.delete(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}
