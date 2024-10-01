const mysql = require('mysql');

//połączenie
const connection = mysql.createConnection({
  host: 'localhost',      
  user: 'root',           
  password: '',           
  database: 'Baza' 
});
console.log("abc");

// Połącz z bazą danych
connection.connect((err) => {
  if (err) {
    return console.error('Błąd połączenia z bazą danych: ' + err.stack);
  }
  console.log('Połączono z bazą danych jako ID: ' + connection.threadId);
  // Wykonaj SELECT
  connection.query('SELECT * FROM dane', (err, results) => {
    if (err) {
      return console.error('Błąd podczas zapytania: ' + err.stack);
    }

    // Wyświetl dane
    console.log('Wyniki zapytania:');
    console.log(results);

    // Zamknij połączenie
    connection.end();
    

  });
});