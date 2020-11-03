import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

export interface ProjectResolverData {
    name: string;
}

// **Note: Resolver services must be provided in the module
// They cannot be injectable becuase we are not injecting them in any component.
@Injectable({
    providedIn: 'any'
})
export class ProjectResolverService implements Resolve<ProjectResolverData>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        ProjectResolverData | Observable<ProjectResolverData> | Promise<ProjectResolverData> {
        return null;
    }
}


