import {Component, OnInit} from '@angular/core';
import { FeatureFlagService } from './utils/feature-flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showFeature: boolean = false;

  constructor(private featureFlagService: FeatureFlagService) {}

  ngOnInit() {
    setInterval(() => this.featureFlagService.getFeatureFlag('newFeature').subscribe((featureToggle) => {
      this.showFeature = featureToggle.status;
    }), 3000)
  }
}

