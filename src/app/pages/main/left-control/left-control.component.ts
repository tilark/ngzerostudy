import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { USERNAME } from 'src/app/services/local-storage/local-storage.service.namespace';
import { ListComponent } from './list/list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.less']
})
export class LeftControlComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @ViewChild(ListComponent, { static: false }) listComponent: ListComponent;
  username: string;
  constructor(
    private store: LocalStorageService,
    private router: Router
    ) { }

  ngOnInit() {
    this.username = this.store.get(USERNAME);
  }

  openAddListModal() {
    this.listComponent.openAddListModal();
  }
  goSummary() {
    this.router.navigateByUrl('/summary');
  }
  goSettings() {
    this.router.navigateByUrl('/settings');
    // this.router.navigateByUrl('/welcome');

  }
}
