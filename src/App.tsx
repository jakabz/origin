import React from 'react';
import './App.css';
import { INavigationItem, TreeNavigation } from './components/TreeNavigation/TreeNavigation';
import { NavigationItems } from './components/TreeNavigation/simpleData';

function App() {

  const [items, setItems] = React.useState<INavigationItem[]>([]);

  React.useEffect(() => {
    setItems(NavigationItems);
  }, []);

  return (
    <div>
      <TreeNavigation
        navigationItems={items}
        changeNavigation={(items) => {
          setItems(items);
        }}
        editMode={true}
      />
    </div>
  );
}

export default App;
