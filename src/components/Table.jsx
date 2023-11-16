import React from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import './Table.css';

export const Table = () => {
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
          <tr>
            <th>Page</th>
            <th className='expand'>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home</td>
            <td>this is the second page</td>
            <td>
              <span className='label label-live'>Live</span>
            </td>
            <td>
              <span className='actions'>
                <BsFillTrashFill className='delete-btn' />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Home</td>
            <td>this is the second page</td>
            <td>
              <span className='label label-live'>Live</span>
            </td>
            <td>
              <span className='actions'>
                <BsFillTrashFill className='delete-btn' />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
