const mysql = require('mysql2');

//połączenie
const connection = mysql.createConnection({
  host: 'localhost',      
  user: 'Jan',           
  password: 'Jan',           
  database: 'Baza' 
});
console.log("test");

// Połącz z bazą danych
connection.connect((err) => {
  if (err) {
    return console.error('Błąd połączenia z bazą danych: ' + err.stack);
  }
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