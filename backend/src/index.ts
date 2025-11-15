import app from './app'
import { DatabaseConnect } from "./config/db.js";

const PORT = process.env.PORT || 3000

// Connect with database
DatabaseConnect();

app.listen(PORT, () => {
  console.log(` Server started on http://localhost:${PORT}`);
});
