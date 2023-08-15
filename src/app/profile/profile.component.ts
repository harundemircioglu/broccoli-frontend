import { Component, OnInit } from '@angular/core';
import { User } from 'src/core/models/user.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { ApiService } from 'src/core/services/api/api.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers:[MessageService]
})
export class ProfileComponent implements OnInit {

  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService,
    private messageService : MessageService
  ) { }

  //Update işlemini gerçekleştiren kod
  onUpdate(id: number, currentUser: User) {
    this.update(id, currentUser).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Profil güncellendi' });
      }
    }).catch((error) => {
      console.error('Kullanıcı güncellenirken bir hata oluştu:', error);
    });
  }

  //Update işlemini gerçekleştiren kod
  update(id: number, currentUser: User) {
    return this.apiService.updateEntity(id, currentUser, User);
  }

  refresh() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (!user) {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnInit() {
    this.refresh();
  }
}
