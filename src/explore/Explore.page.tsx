import { PageComponent } from '@/src/generic/common/components/page/Page.component';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component';

function ExplorePage() {
  return (
    <PageComponent>
      <DebugComponent>Debug</DebugComponent>
      <h1>Explore Page</h1>
    </PageComponent>
  );
}

export default ExplorePage;
