const express = require('express');
const userRouter = require('./routes/userRoutes');

const app = express();
const port = 3000;
app.use(express.json());

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});