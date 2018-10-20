<?php
class Database{
 
    // specify your own database credentials
    private $host = "148.66.145.22";
    private $db_name = "SCI_Master";
    private $username = "androdevelopers";
    private $password = "Parisss@123";
    public $conn;
 
    // get the database connection
    public function getConnection(){
 
        $this->conn = null;
 
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
    }
}
?>
