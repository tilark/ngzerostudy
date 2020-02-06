import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { INIT_FLAG } from '../local-storage/local-storage.service.namespace';

@Injectable({
  providedIn: 'root'
})
export class InitGuradService {

  constructor(
    private store: LocalStorageService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const init = !!this.store.get(INIT_FLAG);

    if (state.url.includes('setup') && init) {
      console.log('enter init-guard canActivate init', init, state.url);
      this.router.navigateByUrl('/main');
      return false;
    }

    if (!state.url.includes('setup') && !init) {
      console.log('enter init-guard canActivate !init', init, state.url);
      this.router.navigateByUrl('/setup');
      return false;
    }

    return true;
  }
}
