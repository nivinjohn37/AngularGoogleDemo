import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activities: string[] = [];

  constructor() {
  }
  addActivities(activity: string) {
    this.activities.push(activity);
  }
  clearActivites() {
    this.activities = [];
  }
}
