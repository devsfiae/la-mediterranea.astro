<?php
// reservation_items.php

// Aktivieren der Fehlerberichterstattung
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Start des Output Buffers
ob_start();

// Fehlerbehandlungsfunktion
function handleError($errno, $errstr, $errfile, $errline) {
    ob_end_clean();
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => "$errstr in $errfile on line $errline"]);
    exit();
}
set_error_handler('handleError');

// Ausnahmebehandlungsfunktion
function handleException($exception) {
    ob_end_clean();
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => $exception->getMessage()]);
    exit();
}
set_exception_handler('handleException');

// Verbindung zur Datenbank herstellen
$servername = "localhost";
$username = "la_mediterranea";
$password = "theycantforceus!";
$dbname = "la_mediterranea";

// Verbindung erstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Verbindung überprüfen
if ($conn->connect_error) {
    $error = ["error" => "Connection failed: " . $conn->connect_error];
    ob_end_clean();
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($error);
    exit();
}

// Zeichensatz einstellen
$conn->set_charset("utf8mb4");

// Initialisiere Reservierungsdaten
$reservations = [];

// SQL-Abfrage vorbereiten mit optionalem Datumsfilter
if (isset($_GET['date']) && !empty($_GET['date'])) {
    // Wenn ein bestimmtes Datum übergeben wurde, nur dieses Datum abfragen
    $date = $_GET['date'];
    $sql = "SELECT reservations.*, states.state_name
            FROM reservations 
            INNER JOIN states ON reservations.state_id = states.state_id 
            WHERE reservations.reservation_date = ?
            ORDER BY reservations.reservation_date ASC, reservations.reservation_time ASC";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $date);
} else {
    // Keine Filter -> Alle Reservierungen zurückgeben
    $sql = "SELECT reservations.*, states.state_name
            FROM reservations 
            INNER JOIN states ON reservations.state_id = states.state_id 
            ORDER BY reservations.reservation_date ASC, reservations.reservation_time ASC";
    $stmt = $conn->prepare($sql);
}

// Überprüfen, ob die Abfrage vorbereitet wurde
if (!$stmt) {
    $error = ["error" => "Failed to prepare SQL statement: " . $conn->error];
    ob_end_clean();
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($error);
    exit();
}

// Abfrage ausführen
$stmt->execute();

// Überprüfen auf Ausführungsfehler
if ($stmt->errno) {
    $error = ["error" => "Failed to execute SQL statement: " . $stmt->error];
    ob_end_clean();
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($error);
    exit();
}

// Ergebnis abrufen
$result = $stmt->get_result();

// **Debugging-Informationen für leere Resultate**
if ($result->num_rows === 0) {
    echo json_encode(["message" => "No records found."], JSON_UNESCAPED_UNICODE);
    exit();
}

// Daten sammeln
while ($row = $result->fetch_assoc()) {
    $reservation = [
        'table' => $row['table_id'] ?? '',
        'time' => $row['reservation_time'] ?? '',
        'date' => $row['reservation_date'] ?? '',
        'persons' => $row['persons'] ?? 0,
        'state' => $row['state_name'] ?? ''
    ];

    $reservations[] = $reservation;
}

// Verbindung schließen
$stmt->close();
$conn->close();

// JSON-Kodierung
$output = json_encode($reservations, JSON_UNESCAPED_UNICODE);

// Überprüfen auf JSON-Fehler
if (json_last_error() !== JSON_ERROR_NONE) {
    $error = [
        "error" => "JSON Encoding Error: " . json_last_error_msg(),
        "data" => $reservations
    ];
    ob_end_clean();
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($error);
    exit();
}

// Output Buffer leeren und JSON ausgeben
ob_end_clean();
header('Content-Type: application/json; charset=utf-8');
echo $output;
?>