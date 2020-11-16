import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategory, changePage } from '../redux/actions';

export default function SelectedListItem() {
  const allcategories = useSelector((state) => state.category);
  const selectedCategory = useSelector((state) => state.selectedCategory);

  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  useEffect(() => {
    setSelectedIndex(selectedCategory);
  }, [selectedCategory]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    dispatch(selectCategory(index));
    dispatch(changePage('SELECTED'));
  };

  return (
    <div>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        {allcategories.map((each, index) => (
          <div key={index}>
            <ListItem
              button
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemText primary={each} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}
