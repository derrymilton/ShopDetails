import express from 'express';
import { createConnection } from 'mysql2';
// import { json } from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors()); // To allow cross-origin requests
app.use(express.json());

// Create a MySQL connection
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Derry@26', // Replace with your MySQL password
  database: 'routesapp'   // Replace with your database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Route to add shopDetails
app.post('/jobs', (req, res) => {
  const { name,shopName,shopAddress,location,contactPhone,routeNo,day,completionStatus } = req.body;
  const sql = 'INSERT INTO shopdetails ( name,shopName,shopAddress,location,contactPhone,RouteNo,day,completionStatus) VALUES (?, ?, ?,?,?,?,?,?)';
  db.query(sql, [name,shopName,shopAddress,location,contactPhone,routeNo,day,completionStatus], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      res.send('Student data added successfully!');
    }
  });
});


//for jobListing

app.get('/jobs', (req, res) => {
    const sql = 'SELECT * FROM shopdetails';
    
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data');
      } else {
        res.json(results); // Send the fetched data as JSON
      }
    });
  });

  //for shop details page
app.get('/api/jobs/:id', (req, res) => {
    const jobId = req.params.id; // Extract job ID from URL parameters
    const sql = 'SELECT * FROM shopdetails WHERE id = ?';
  
    db.query(sql, [jobId], (err, results) => {
      if (err) {
        console.error('Error fetching job:', err);
        return res.status(500).send('Error fetching job');
      }
      if (results.length === 0) {
        return res.status(404).send('Job not found');
      }
      return res.json(results[0]); // Return the specific job
    });
  });
  

// Route to delete a specific job
app.delete('/jobs/:id', (req, res) => {
    const jobId = req.params.id; // Extract job ID from URL parameters
    const sql = 'DELETE FROM shopdetails WHERE id = ?';
    
    db.query(sql, [jobId], (err, result) => {
      if (err) {
        console.error('Error deleting job:', err);
        res.status(500).send('Error deleting job');
      } else if (result.affectedRows === 0) {
        res.status(404).send('Job not found');
      } else {
        res.send('Job deleted successfully');
      }
    });
  });

  // Route to update a specific job
app.put('/jobs/:id', (req, res) => {
    const jobId = req.params.id; // Extract job ID from URL parameters
    const { name,shopName,shopAddress,location,contactPhone,routeNo,day,completionStatus } = req.body;
    const sql = 'UPDATE shopdetails SET name = ?, shopName = ?, shopAddress=?, location = ?, contactPhone = ?, routeNo = ?, day=?,completionStatus=? WHERE id = ?';
    
    db.query(sql, [name,shopName,shopAddress,location,contactPhone,routeNo,day,completionStatus, jobId], (err, result) => {
      if (err) {
        console.error('Error updating job:', err);
        res.status(500).send('Error updating job');
      } else if (result.affectedRows === 0) {
        res.status(404).send('Job not found');
      } else {
        res.send('Job updated successfully');
      }
    });
  });
  
 const PORT=8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});