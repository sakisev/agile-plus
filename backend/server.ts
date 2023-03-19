import path from 'path';
import app from './src/app';

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// Serve the React app for any other request
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

