const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
    res.send('CI/CD Application Running-v1');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
console.log("New CI/CD build trigger");
