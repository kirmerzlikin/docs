import { reactExample } from 'Frontend/demo/react-example';
import React, { useState } from 'react';
import { RichTextEditor } from '@hilla/react-components/RichTextEditor.js';
import templates from '../../../../src/main/resources/data/templates.json';

function Example() {
  const [richText, setRichText] = useState(templates.richTextDelta);

  return (
    <>
      {/* tag::snippet[] */}
      <RichTextEditor
        style={{ minHeight: '200px', maxHeight: '400px' }}
        value={richText}
        onValueChanged={(event) => setRichText(event.detail.value)}
      />
      {/* end::snippet[] */}
    </>
  );
}

export default reactExample(Example);
