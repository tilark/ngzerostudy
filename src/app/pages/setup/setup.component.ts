import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import {
  USERNAME,
  INIT_FLAG,
  START_USING_DATE
} from '../../services/local-storage/local-storage.service.namespace';
import { getTodayTime } from 'src/app/utils/time';
@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.less']
})
export class SetupComponent implements OnInit {
  public username: string;
  constructor(private store: LocalStorageService) { }

  ngOnInit() {
  }

  completeSetup(): void {
    this.store.set(INIT_FLAG, true);
    this.store.set(START_USING_DATE, getTodayTime());
    this.store.set(USERNAME, this.username);
  }
}
