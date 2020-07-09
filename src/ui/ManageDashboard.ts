import init from "../domain/ManageDashboardApp";

export class ManageDashboard {
  static templateUrl = "/partials/alerts.html";
  constructor() {
    init();
  }
}
