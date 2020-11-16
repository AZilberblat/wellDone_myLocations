import AddModal from './components/AddModal';
import DeleteModal from './components/DeleteModal';
import EditModal from './components/EditModal';
import Header from './components/Header';
import ListData from './components/ListData';
import ViewModal from './components/ViewModal';

function App() {
  return (
    <div className="App">
      <Header />
      <ListData />
      <AddModal />
      <ViewModal />
      <EditModal />
      <DeleteModal />
    </div>
  );
}

export default App;
