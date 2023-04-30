import React from 'react';
import { Button } from '@hilla/react-components/Button.js';
import { IntegerField } from '@hilla/react-components/IntegerField.js';
import { VerticalLayout } from '@hilla/react-components/VerticalLayout.js';

export default function ReactExample() {
  const [clickCount, setClickCount] = React.useState(0);

  return (
    <div>
      {/* tag::snippet[] */}
      <VerticalLayout>
        <IntegerField label="Clicks" value={String(clickCount)} readonly></IntegerField>

        <Button onClick={() => setClickCount(clickCount + 1)}>Click me</Button>
      </VerticalLayout>
      {/* end::snippet[] */}
    </div>
  );
}
