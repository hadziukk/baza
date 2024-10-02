const mysql = require('mysql2');

//połączenie
const connection = mysql.createConnection({
  host: 'localhost',      
  user: 'Jan',           
  password: 'Jan',           
  database: 'Baza' 
});
console.log("test");

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <label>Wpisz Imię:</label>
            <input type="text" id="imie" name="imie" required>
            <br>
            <label>Wpisz Nazwisko:</label>
            <input type="text" id="nazwisko" name="nazwisko" required>
            <br>
            <button type="submit">Wyślij</button>
        </form>
    `);
});

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