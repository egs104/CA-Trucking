import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;
const ExportCSVButton = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <div>
      <button className="btn btn-success" onClick={ handleClick }><Glyphicon glyph="glyphicon glyphicon-download-alt" /> Export to CSV</button>
    </div>
  );
};

class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {"products": [{name: "Eric", id:104, price:100}, {name: "Gerry", id:810, price:10}, {name: "Jose", id:920, price:250}], "columns": [{
      dataField: 'id',
      text: 'Product ID',
      sort: true
    }, {
      dataField: 'name',
      text: 'Product Name',
      sort: true
    }, {
      dataField: 'price',
      text: 'Product Price',
      sort: true
    }]}; 
  }

  render() {
    return (
      <ToolkitProvider
        keyField="id"
        data={ this.state.products }
        columns={ this.state.columns }
        search
        exportCSV
      >
        {
          props => (
            <div>
              <SearchBar { ...props.searchProps } />
              <hr/>
              <BootstrapTable { ...props.baseProps } />
              <ExportCSVButton { ...props.csvProps }></ExportCSVButton>
            </div>
          )
        }
      </ToolkitProvider>
    );
  }
}

export default MyTable;