import styled from 'styled-components';

export const Table = styled.table`
  margin: 50px auto;
  width: 1200px;
  border-collapse: separate;
  border-spacing: 0 1em;
  background: #fff;
  box-shadow: 0 0 40px rgba(1,1,1,0.3);
  border-radius: 20px;

  @media (max-width: 940px) {
    width: 100%;
  }

  thead th {
    color: #212121;
    text-align: left;
    padding: 12px;
    text-align: center;
  }
  tbody tr {
    transition: 0.3s;

    &:hover {
      background: #f5f5f5;
    }
  }
  tbody td {
    padding: 12px;
    color: #757575;
    text-align: center;
    border-bottom: 1px dotted #757575;
  }
`;
