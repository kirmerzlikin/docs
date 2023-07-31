import { reactExample } from 'Frontend/demo/react-example';
import React, { useEffect, useState } from 'react';
import { Grid } from '@hilla/react-components/Grid.js'; // import{GridColumn}from'@hilla/react-components/GridColumn.js';import{GridTreeColumn}from'@hilla/react-components/GridTreeColumn.js';import{GridDataProviderCallback,GridDataProviderParams,GridDragStartEvent,GridDropEvent,GridItemModel}from'@vaadin/grid';import{getPeople}from'Frontend/demo/domain/DataService';import type Person from'Frontend/generated/com/vaadin/demo/domain/Person';const Example=()=>{const[draggedItem,setDraggedItem]=useState();const[dataProvider,setDataProvider]=useState(()=>{});const[expandedItems,setExpandedItems]=useState([]);const[items,setItems]=useState([]);const[managers,setManagers]=useState([]);useEffect(()=>{getPeople().then(({people})=>{setItems(people);setManagers(people.filter(item=>item.manager));});},[]);useEffect(()=>{const dataProvider=(params,callback)=>{const{page,pageSize,parentItem}=params;const startIndex=page*pageSize;const endIndex=startIndex+pageSize;const result=parentItem?items.filter(item=>item.managerId===parentItem.id):managers.slice(startIndex,endIndex);callback(result,result.length);};setDataProvider(dataProvider);},[managers,items]);const handleExpandedItemsChanged=event=>{setExpandedItems(event.detail.value);};const handleGridDragStart=event=>{setDraggedItem(event.detail.draggedItems[0]);};const handleGridDragEnd=()=>{delete draggedItem;};const handleGridDrop=event=>{const manager=event.detail.dropTargetItem;if(draggedItem){draggedItem.managerId=manager.id;setDataProvider(dataProvider+1);}};const handleDragFilter=model=>{const item=model.item;return!item.manager;};const handleDropFilter=model=>{const item=model.item;return item.manager&&item.id!==draggedItem?.managerId;};return(/* tag::snippet[] */React.createElement(Grid,{dataProvider,dataProviderIdentifier:dataProvider,itemIdPath:'id',itemIdPathIsRequired:true,itemHasChildrenPath:'manager',expandedItems,expandedItemsChanged:handleExpandedItemsChanged,rowsDraggable:true,dropMode:'on-top',gridDragStart:handleGridDragStart,gridDragEnd:handleGridDragEnd,gridDrop:handleGridDrop,dragFilter:handleDragFilter,dropFilter:handleDropFilter},React.createElement(GridTreeColumn,{path:'firstName'}),React.createElement(Grid.Column,{path:'lastName'}),React.createElement(Grid.Column,{path:'email'})));};export default reactExample(Example);
