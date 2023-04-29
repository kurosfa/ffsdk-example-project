import {Injectable} from '@angular/core';
import {FeatureToggle, FeatureToggleSDK} from 'ffsdk';
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {

  featureToggleSDK = new FeatureToggleSDK();

  getFeatureFlag(flagName: string): Observable<FeatureToggle> {
    return from(this.featureToggleSDK.getFeatureToggleByNameAndProjectId(flagName, 1));
  }

}

