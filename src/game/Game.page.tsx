import { PageComponent } from '../generic/components/page/Page.component';
import { DashboardComponent } from './components/dashboard/Dashboard.component';

function GamePage() {
  return (
    <PageComponent>
      <DashboardComponent />
    </PageComponent>
  );
}

export default GamePage;
