import './App.css';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="root">
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Time Slab</th>
            <th>Task</th>
            <th>Time taken (in minutes)</th>
            <th>Important?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" /></td>
            <td>Mark</td>
            <td><input type="number" name="num1"/></td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td><input type="text" /></td>
            <td>Jacob</td>
            <td><input type="number" name="num2"/></td>
            <td>@fat</td>
          </tr>
          <tr>
            <td><input type="text" /></td>
            <td >Larry</td>
            <td><input type="number" name="num3"/></td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <p id="new"></p>
      <button onclick="add()">Add</button>
      

      
    </div>
    
  );
}

export default App;
