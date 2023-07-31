import { reactExample } from 'Frontend/demo/react-example';
import React from 'react';
import { TextArea } from '@hilla/react-components/TextArea.js';

function Example() {
  return (
    <>
      {/* tag::snippet[] */}
      <TextArea
        theme="align-right small helper-above-field"
        label="Label"
        helperText="Helper text"
        value="Value"
        style={{
          '--vaadin-input-field-border-width': '1px',
          width: '100%',
        }}
      />
      {/* end::snippet[] */}
    </>
  );
}

export default reactExample(Example);
