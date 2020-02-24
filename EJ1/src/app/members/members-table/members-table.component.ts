import { Component } from '@angular/core';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: [`em {color: red;}`]
})

export class MembersTableComponent {
  members: MemberEntity[];
  membersName: string = 'lemoncode';

  constructor(private membersApi: MembersApiService) { }

  loadMembers(formValues: any) {
    this.membersApi.getAllMembers(formValues["membersName"])
      .subscribe(
        (ms) => this.members = ms,
        (error) => error.status = '404' ? this.members = [] : console.log(error)
      );
  }

}
