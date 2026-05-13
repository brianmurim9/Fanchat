<?php
// ================= DATABASE CONFIGURATION =================
// Fill this when you connect your real database

$host = "localhost";
$dbname = "fanchat";
$username = "root";
$password = "";

// PDO connection (safe structure)
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>