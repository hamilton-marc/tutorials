import { html } from 'lit';
import { customElement } from 'lit/decorators';
import { View } from 'Frontend/views/view';
import { dashboardViewStore } from './dashboard-view-store';
import '@google-web-components/google-chart';

@customElement('dashboard-view')
export class DashboardView extends View {
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('flex', 'flex-col', 'items-center', 'pt-xl');
  }

  getChartData() {
    const axes = ['["Company", "Count"]']
    const data = dashboardViewStore.companyStats.map(stat => '["' + stat.name + '",' + stat.y + ']');

    return axes.concat(data);
  }

  getCompanyStats() {
    if (dashboardViewStore.companyStats.length === 0) {
      return html`<p>Loading stats...</p>`;
    } else {
      return html`
        <google-chart type="pie"
          options='{ "pieHole": 0.3 }'
          data='[${this.getChartData().toString()}]'></google-chart>
      `;
    }
  }

  render() {
    return html`
    <div class="text-xl mb-xl">
      ${dashboardViewStore.contactCount} contacts
    </div>
    
    ${this.getCompanyStats()}
  `;
  }
}