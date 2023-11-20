import { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import { Modal } from './components/Modal';

function App() {
  const [modaOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    if (rowToEdit === null) {
      const newRows = [...rows, newRow];
      setData(newRows);
    } else {
      setData(
        rows.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;
          return newRow;
        })
      );
    }
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
    if (data !== null) setRows(JSON.parse(data));
  }, []);

  return (
    <div className='App'>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button className='btn' onClick={() => setModalOpen(true)}>
        Add Item
      </button>
      {modaOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
