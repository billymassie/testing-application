import { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import { Modal } from './components/Modal';

function App() {
  const [modaOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const handleSubmit = (newRow) => {
    const newRows = [...rows, newRow];
    setData(newRows);
  };

  const handleDeleteRow = (targetIndex) => {
    const newRows = rows.filter((_, idx) => idx !== targetIndex);
    setData(newRows);
  };

  const setData = (newRows) => {
    setRows(newRows);
    localStorage.setItem('STOCK_ITEM', JSON.stringify(newRows));
  };

  useEffect(() => {
    const data = localStorage.getItem('STOCK_ITEM');
    setRows(JSON.parse(data));
  }, []);

  return (
    <div className='App'>
      <Table rows={rows} deleteRow={handleDeleteRow} />
      <button className='btn' onClick={() => setModalOpen(true)}>
        Add Item
      </button>
      {modaOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
