import { reactExample } from 'Frontend/demo/react-example';
import React, { useEffect, useState } from 'react';
import { ComboBox } from '@hilla/react-components/ComboBox.js';
import { ComboBoxRenderer } from '@hilla/react-components/ComboBox/litRenderer.js';
import type { ComboBoxFilterChangedEvent } from '@hilla/react-components/ComboBox.js';
import { getPeople } from 'Frontend/demo/domain/DataService';
import type Person from 'Frontend/generated/com/vaadin/demo/domain/Person';

function Example() {
  const [allItems, setAllItems] = useState<Person[]>([]);
  const [filteredItems, setFilteredItems] = useState<Person[]>([]);

  useEffect(() => {
    getPeople().then(({ people }) => {
      const items = people.map((person) => ({
        ...person,
        displayName: `${person.firstName} ${person.lastName}`,
      }));
      setAllItems(items);
      setFilteredItems(items);
    });
  }, []);

  const filterChanged = (e: ComboBoxFilterChangedEvent) => {
    const filter = e.detail.value;
    setFilteredItems(
      allItems.filter(({ firstName, lastName, profession }) =>
        `${firstName} ${lastName} ${profession}`.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  return (
    <>
      {/* tag::combobox[] */}
      <ComboBox
        label="Choose doctor"
        itemLabelPath="displayName"
        filteredItems={filteredItems}
        style={{ '--vaadin-combo-box-overlay-width': '16em' }}
        onFilterChanged={filterChanged}
      >
        {ComboBoxRenderer((person) => (
          <div style={{ display: 'flex' }}>
            <img
              style={{ height: 'var(--lumo-size-m)', marginRight: 'var(--lumo-space-s)' }}
              src={person.pictureUrl}
              alt={`Portrait of ${person.firstName} ${person.lastName}`}
            />
            <div>
              {person.firstName} {person.lastName}
              <div
                style={{
                  fontSize: 'var(--lumo-font-size-s)',
                  color: 'var(--lumo-secondary-text-color)',
                }}
              >
                {person.profession}
              </div>
            </div>
          </div>
        ))}
      </ComboBox>
      {/* end::combobox[] */}
    </>
  );
}

export default reactExample(Example);
