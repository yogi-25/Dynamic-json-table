import React, { Component } from 'react';
import './App.css';
 

class App extends Component {

  constructor() {

    super();

    this.state = {

      jsonData: [], 
      currentPage: 1, 

      itemsPerPage: 11, 

    };

  }

 

  componentDidMount() {

fetch('http://localhost:3000/dataTable.json')

      .then((response) => response.json())

      .then((data) => {

        this.setState({ jsonData: data }); 

      })

      .catch((error) => {

        console.error('Error fetching data:', error);

      });

  }

 

  handlePageChange = (page) => {

    this.setState({ currentPage: page });

  };

 

  render() {

    const { jsonData, currentPage, itemsPerPage } = this.state;

 


    const startIndex = (currentPage - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

 


    const currentPageData = jsonData.slice(startIndex, endIndex);

 

    return (

      <div>

        <h1>Dynamic Table</h1>

        <table>

          <thead>

            <tr>

              <th>INSTRUMENT</th>

              <th>SYMBOL</th>
              <th>EXPIRY_DATE</th>

              <th>STRIKE_PR</th>

              <th>OPTION_TYP</th>
               <th>OPEN</th>
              <th>HIGH</th>
              <th>LOW</th>
              <th>CLOSE</th>
              <th>SETTLE_PR</th>
              <th>CLOSE</th>
              <th>CONTRACTS</th>
              <th>VAL_INLAKH</th>
              <th>OPEN_INT</th>
              <th>CHG_IN_OI</th>
              <th>TIMESTAMP</th>
              


            </tr>

          </thead>

          <tbody>

            {currentPageData.map((item, index) => (

              <tr key={index}>

                <td>{item.INSTRUMENT}</td>

                <td>{item.SYMBOL}</td>
                <td>{item.EXPIRY_DT}</td>

                <td>{item.STRIKE_PR}</td>
                <td>{item.OPTION_TYP}</td>
                <td>{item.OPEN}</td>
                <td>{item.HIGH}</td>
                <td>{item.LOW}</td>
                <td>{item.CLOSE}</td>
                <td>{item.SETTLE_PR}</td>
                <td>{item.CLOSE}</td>
                <td>{item.CONTRACTS}</td>
                <td>{item.VAL_INLAKH}</td>
                <td>{item.OPEN_INT}</td>
                <td>{item.CHG_IN_OI}</td>
                <td>{item.TIMESTAMP}</td>

                {/* Add more table cells for your JSON fields */}

              </tr>

            ))}

          </tbody>

        </table>

 

        <div>

          {/* Pagination controls */}

          <button

            onClick={() => this.handlePageChange(currentPage - 1)}

            disabled={currentPage === 1}

          >

            Previous

          </button>

          <span>Page {currentPage}</span>

          <button

            onClick={() => this.handlePageChange(currentPage + 1)}

            disabled={endIndex >= jsonData.length}

          >

            Next

          </button>

        </div>

      </div>

    );

  }

}

 

export default App;