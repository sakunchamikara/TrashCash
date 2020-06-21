import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authservice: AuthserviceService
  ) {}

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }

}
