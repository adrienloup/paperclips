import { useTitle } from '@/src/generic/hooks/useTitle';
import { PageComponent } from '@/src/generic/common/components/page/Page.component';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component';

function ExplorePage() {
  useTitle('Explore.');

  return (
    <PageComponent>
      <DebugComponent>Debug</DebugComponent>
      <h1>Explore Page</h1>
    </PageComponent>
  );
}

export default ExplorePage;
