import React from 'react';
import { Table } from './styles';

function List ({quotes}) {
  return (
    <Table>
        <thead>
          <tr>
            <th>
              Open
            </th>
            <th>
              High
            </th>
            <th>
              Low
            </th>
            <th>
              Close*
            </th>
            <th>
              Adj CLose**
            </th>
          </tr>
        </thead>

        <tbody>
          {quotes.map(quote => (
            <tr key={quote.adjClose}>
            <td>{quote.open}</td>
            <td>{quote.high}</td>
            <td>{quote.low}</td>
            <td>{quote.close}</td>
            <td>{quote.adjClose}</td>
          </tr>
          ))}

        </tbody>
      </Table>
  )
}

export default List;
