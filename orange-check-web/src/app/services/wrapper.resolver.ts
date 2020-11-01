import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Wrapper } from '@components/wrapper/wrapper.class';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class WrapperResolverService implements Resolve<Wrapper> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Wrapper | Observable<Wrapper> | Promise<Wrapper> {
        return null;
    }
}
