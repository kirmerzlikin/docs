import { reactExample } from 'Frontend/demo/react-example';
import React, { useEffect, useState } from 'react';
import { Grid } from '@hilla/react-components/Grid.js';
import { GridColumn } from '@hilla/react-components/GridColumn.js';
import { getPeople } from 'Frontend/demo/domain/DataService';
import { Icon } from '@hilla/react-components/Icon.js';

function Example() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getPeople().then(({ people }) => setItems(people));
  }, []);

  const renderBoolean = (item, _model, column) => {
    let icon;
    let title;
    let theme;

    if (item[column.id]) {
      icon = 'vaadin:check';
      title = 'Yes';
      theme = 'success';
    } else {
      icon = 'vaadin:close-small';
      title = 'No';
      theme = 'error';
    }

    return (
      <Icon
        aria-label={title}
        icon={icon}
        style={{ padding: 'var(--lumo-space-xs)' }}
        {...{ theme: `badge ${theme}`, title }}
      />
    );
  };

  return (
    <Grid items={items}>
      <GridColumn path="name" header="Name" />
      <GridColumn id="view" header="View">
        {renderBoolean}
      </GridColumn>
      <GridColumn id="comment" header="Comment">
        {renderBoolean}
      </GridColumn>
      <GridColumn id="edit" header="Edit">
        {renderBoolean}
      </GridColumn>
    </Grid>
  );
}

export default reactExample(Example);
