const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/admin/users', require('./routes/admin/userApi'));
app.use('/api/admin/country', require('./routes/admin/countryApi'));
app.use('/api/admin/blog', require('./routes/admin/blogApi'));


app.use('/api/member/', require('./routes/client/clientUserApi'));

app.use('/api/', require('./routes/authApi'));


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});