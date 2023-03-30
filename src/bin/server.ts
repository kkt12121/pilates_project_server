const app = require("../index");
const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`
    #############################################
        🛡️ Server listening on port: ${PORT} 🛡️
    #############################################    
    `);
});
