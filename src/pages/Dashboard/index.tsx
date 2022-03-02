import * as React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { ManageDashboards } from './ManageDashboards';
import { TopMenu } from './../Catalog/TopMenu';
export class Dashboard extends React.Component<any, any> {
  breadCrumbs: any;
  constructor(props: any) {
    super(props);
    this.state = {};
    this.breadCrumbs = [
      {
        label: 'Home',
        route: `/`,
      },
      {
        label: 'Perfmanager | Dashboard',
        isCurrentPage: true,
      },
    ];
  }

  render() {
    return (
      <div className="perfmanager-dashboard-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="PREFORMANCE MANAGEMENT" />
        <div className="perfmanager-page-container">
          <div className="common-container">
            <TopMenu />
          </div>
          <div className="common-container border-bottom-0">
            <ManageDashboards />
          </div>
        </div>
      </div>
    );
  }
}
