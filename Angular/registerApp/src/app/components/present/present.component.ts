import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

  premio: string = "";

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    // this.activatedRoute.params.subscribe((params: any): void => {
    //   let token = params.token
    //   this.getPremio(token)
    //  })

    const token: string | null = localStorage.getItem('token');
    if (token !== null) {
      let response = await this.usersService.getPresent(token);
      let valor = response.success.split(': ')[1];
      this.premio = valor.split(' ')[0];
    }
  }

  // async getPremio(token: string) {
  //   let response = await this.usersService.getPresent(token);
  //   console.log(response);
  // }

}
