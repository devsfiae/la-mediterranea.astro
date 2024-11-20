<?php
// Activate error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Error handling function
function handleError($errno, $errstr, $errfile, $errline) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => "$errstr in $errfile on line $errline"]);
    exit();
}
set_error_handler('handleError');

// Exception handling function
function handleException($exception) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => $exception->getMessage()]);
    exit();
}
set_exception_handler('handleException');

// Database connection
$servername = "localhost";
$username = "la_mediterranea";
$password = "theycantforceus!";
$dbname = "la_mediterranea";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    error_log("Database connection failed: " . $conn->connect_error);
    echo json_encode(['error' => 'Database connection failed.']);
    exit();
}

$conn->set_charset("utf8mb4");

// Initialize booking data
$bookings = [];

if (isset($_GET['date']) && !empty($_GET['date'])) {
    $date = $_GET['date'];
    $sql = "SELECT booking_items.*, state_items.item_name
            FROM booking_items 
            INNER JOIN state_items ON booking_items.state_id = state_items.state_item_id 
            WHERE booking_items.booking_date = ?
            ORDER BY booking_items.booking_date ASC, booking_items.booking_time ASC";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $date);
} else {
    $sql = "SELECT booking_items.*, state_items.item_name
            FROM booking_items 
            INNER JOIN state_items ON booking_items.state_id = state_items.state_item_id 
            ORDER BY booking_items.booking_date ASC, booking_items.booking_time ASC";
    $stmt = $conn->prepare($sql);
}

if (!$stmt) {
    error_log("SQL prepare failed: " . $conn->error);
    echo json_encode(['error' => 'Failed to prepare SQL statement.']);
    exit();
}

$stmt->execute();

if ($stmt->errno) {
    error_log("SQL execute failed: " . $stmt->error);
    echo json_encode(['error' => 'Failed to execute SQL statement.']);
    exit();
}

$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["message" => "No records found."], JSON_UNESCAPED_UNICODE);
    exit();
}

while ($row = $result->fetch_assoc()) {
    $bookings[] = [
        'table' => $row['table_id'] ?? '',
        'time' => $row['booking_time'] ?? '',
        'date' => $row['booking_date'] ?? '',
        'persons' => $row['persons'] ?? 0,
        'state' => $row['item_name'] ?? ''
    ];
}

$stmt->close();
$conn->close();

echo json_encode($bookings, JSON_UNESCAPED_UNICODE);
?>