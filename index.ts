import express, { Application } from 'express'
import { router } from './src/routes';

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
