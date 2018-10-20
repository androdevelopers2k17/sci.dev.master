<?php
class MstStudent{
 
    // database connection and table name
    private $conn;
    private $table_name = "MstStudent";
    // object properties
    public $MSD_ACHIEVEMENTS;
    public $MSD_ALTMOBILE;
    public $MSD_CITY;
    public $MSD_COMMENTS;
    public $MSD_CREATEDDATETIME;
    public $MSD_DOB;
    public $MSD_DPURL;
    public $MSD_EDU1BOARD;
    public $MSD_EDU1CITY;
    public $MSD_EDU1MED;
    public $MSD_EDU1PERCENTAGE;
    public $MSD_EDU1QUAL;
    public $MSD_EDU1SCHOOL;
    public $MSD_EDU1YEAR;
    public $MSD_EDU2BOARD;
    public $MSD_EDU2CITY;
    public $MSD_EDU2MED;
    public $MSD_EDU2PERCENTAGE;
    public $MSD_EDU2QUAL;
    public $MSD_EDU2SCHOOL;
    public $MSD_EDU2YEAR;
    public $MSD_EDU3BOARD;
    public $MSD_EDU3CITY;
    public $MSD_EDU3MED;
    public $MSD_EDU3PERCENTAGE;
    public $MSD_EDU3QUAL;
    public $MSD_EDU3SCHOOL;
    public $MSD_EDU3YEAR;
    public $MSD_EMAIL;
    public $MSD_FATHERNAME;
    public $MSD_GENDER;
    public $MSD_ISACTIVE;
    public $MSD_IsHSC;
    public $MSD_ISMODIFIED;
    public $MSD_IsSSC;
    public $MSD_IsUG;
    public $MSD_LOCALITY;
    public $MSD_NAME;
    public $MSD_PIN;
    public $MSD_PK;
    public $MSD_PRIMARYMOBILE;
    public $MSD_PROOFURL;
    public $MSD_REGNO;
    public $MSD_REQUESTEDDATE;
    public $MSD_STATE;
    public $MSD_STREETADRS;
    public $MSD_TERMSAPPROVED;
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    function read(){
 
        // select all query
        $query = "SELECT 
        MSD_PK,MSD_REGNO,MSD_NAME,MSD_FATHERNAME,MSD_DOB,MSD_GENDER,MSD_PRIMARYMOBILE,MSD_ALTMOBILE,MSD_EMAIL,MSD_STREETADRS,MSD_LOCALITY,MSD_CITY,MSD_PIN,MSD_STATE,MSD_EDU1QUAL,MSD_EDU1MED,MSD_EDU1BOARD,MSD_EDU1YEAR,MSD_EDU1SCHOOL,MSD_EDU1CITY,MSD_EDU1PERCENTAGE,MSD_EDU2QUAL,MSD_EDU2MED,MSD_EDU2BOARD,MSD_EDU2YEAR,MSD_EDU2SCHOOL,MSD_EDU2CITY,MSD_EDU2PERCENTAGE,MSD_EDU3QUAL,MSD_EDU3MED,MSD_EDU3BOARD,MSD_EDU3YEAR,MSD_EDU3SCHOOL,MSD_EDU3CITY,MSD_EDU3PERCENTAGE,MSD_IsSSC,MSD_IsHSC,MSD_IsUG,MSD_ACHIEVEMENTS,MSD_DPURL,MSD_PROOFURL,MSD_COMMENTS,MSD_TERMSAPPROVED,MSD_REQUESTEDDATE,MSD_CREATEDDATETIME,MSD_ISACTIVE,MSD_ISMODIFIED
         FROM " . $this->table_name;
     
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $stmt->execute();
     
        return $stmt;
    }
    // create product
function create(){
 
    // query to insert record
    $query = "SELECT 
    MSD_PK,MSD_REGNO,MSD_NAME,MSD_FATHERNAME,MSD_DOB,MSD_GENDER,MSD_PRIMARYMOBILE,MSD_ALTMOBILE,MSD_EMAIL,MSD_STREETADRS,MSD_LOCALITY,MSD_CITY,MSD_PIN,MSD_STATE,MSD_EDU1QUAL,MSD_EDU1MED,MSD_EDU1BOARD,MSD_EDU1YEAR,MSD_EDU1SCHOOL,MSD_EDU1CITY,MSD_EDU1PERCENTAGE,MSD_EDU2QUAL,MSD_EDU2MED,MSD_EDU2BOARD,MSD_EDU2YEAR,MSD_EDU2SCHOOL,MSD_EDU2CITY,MSD_EDU2PERCENTAGE,MSD_EDU3QUAL,MSD_EDU3MED,MSD_EDU3BOARD,MSD_EDU3YEAR,MSD_EDU3SCHOOL,MSD_EDU3CITY,MSD_EDU3PERCENTAGE,MSD_IsSSC,MSD_IsHSC,MSD_IsUG,MSD_ACHIEVEMENTS,MSD_DPURL,MSD_PROOFURL,MSD_COMMENTS,MSD_TERMSAPPROVED,MSD_REQUESTEDDATE,MSD_CREATEDDATETIME,MSD_ISACTIVE,MSD_ISMODIFIED
     FROM " . $this->table_name;
    // $query = "INSERT INTO
    //             " . $this->table_name . "
    //         SET
    //         MSD_ACHIEVEMENTS=:MSD_ACHIEVEMENTS,MSD_ALTMOBILE=:MSD_ALTMOBILE,MSD_CITY=:MSD_CITY,MSD_COMMENTS=:MSD_COMMENTS,MSD_CREATEDDATETIME=:MSD_CREATEDDATETIME,MSD_DOB=:MSD_DOB,MSD_DPURL=:MSD_DPURL,MSD_EDU1BOARD=:MSD_EDU1BOARD,MSD_EDU1CITY=:MSD_EDU1CITY,MSD_EDU1MED=:MSD_EDU1MED,MSD_EDU1PERCENTAGE=:MSD_EDU1PERCENTAGE,MSD_EDU1QUAL=:MSD_EDU1QUAL,MSD_EDU1SCHOOL=:MSD_EDU1SCHOOL,MSD_EDU1YEAR=:MSD_EDU1YEAR,MSD_EDU2BOARD=:MSD_EDU2BOARD,MSD_EDU2CITY=:MSD_EDU2CITY,MSD_EDU2MED	=:MSD_EDU2MED,MSD_EDU2PERCENTAGE=:MSD_EDU2PERCENTAGE,MSD_EDU2QUAL=:MSD_EDU2QUAL,MSD_EDU2SCHOOL=:MSD_EDU2SCHOOL,MSD_EDU2YEAR=:MSD_EDU2YEAR,MSD_EDU3BOARD=:MSD_EDU3BOARD,MSD_EDU3CITY=:MSD_EDU3CITY,MSD_EDU3MED	=:MSD_EDU3MED,MSD_EDU3PERCENTAGE=:MSD_EDU3PERCENTAGE,MSD_EDU3QUAL=:MSD_EDU3QUAL,MSD_EDU3SCHOOL=:MSD_EDU3SCHOOL,MSD_EDU3YEAR=:MSD_EDU3YEAR,MSD_EMAIL=:MSD_EMAIL,MSD_FATHERNAME=:MSD_FATHERNAME,MSD_GENDER=:MSD_GENDER,MSD_ISACTIVE=:MSD_ISACTIVE,MSD_IsHSC=:MSD_IsHSC,MSD_ISMODIFIED=:MSD_ISMODIFIED,MSD_IsSSC=:MSD_IsSSC,MSD_IsUG=:MSD_IsUG,MSD_LOCALITY=:MSD_LOCALITY,MSD_NAME=:MSD_NAME,MSD_PIN=:MSD_PIN,MSD_PK=:MSD_PK,MSD_PRIMARYMOBILE=:MSD_PRIMARYMOBILE,MSD_PROOFURL=:MSD_PROOFURL,MSD_REGNO=:MSD_REGNO,MSD_REQUESTEDDATE=:MSD_REQUESTEDDATE,MSD_STATE=:MSD_STATE,MSD_STREETADRS=:MSD_STREETADRS
    //         ";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
$this->MSD_ACHIEVEMENTS=htmlspecialchars(strip_tags($this->MSD_ACHIEVEMENTS));
$this->MSD_ALTMOBILE=htmlspecialchars(strip_tags($this->MSD_ALTMOBILE));
$this->MSD_CITY=htmlspecialchars(strip_tags($this->MSD_CITY));
$this->MSD_COMMENTS=htmlspecialchars(strip_tags($this->MSD_COMMENTS));
$this->MSD_CREATEDDATETIME=htmlspecialchars(strip_tags($this->MSD_CREATEDDATETIME));
$this->MSD_DOB=htmlspecialchars(strip_tags($this->MSD_DOB));
$this->MSD_DPURL=htmlspecialchars(strip_tags($this->MSD_DPURL));
$this->MSD_EDU1BOARD=htmlspecialchars(strip_tags($this->MSD_EDU1BOARD));
$this->MSD_EDU1CITY=htmlspecialchars(strip_tags($this->MSD_EDU1CITY));
$this->MSD_EDU1MED=htmlspecialchars(strip_tags($this->MSD_EDU1MED));
$this->MSD_EDU1PERCENTAGE=htmlspecialchars(strip_tags($this->MSD_EDU1PERCENTAGE));
$this->MSD_EDU1QUAL=htmlspecialchars(strip_tags($this->MSD_EDU1QUAL));
$this->MSD_EDU1SCHOOL=htmlspecialchars(strip_tags($this->MSD_EDU1SCHOOL));
$this->MSD_EDU1YEAR=htmlspecialchars(strip_tags($this->MSD_EDU1YEAR));
$this->MSD_EDU2BOARD=htmlspecialchars(strip_tags($this->MSD_EDU2BOARD));
$this->MSD_EDU2CITY=htmlspecialchars(strip_tags($this->MSD_EDU2CITY));
$this->MSD_EDU2MED=htmlspecialchars(strip_tags($this->MSD_EDU2MED));
$this->MSD_EDU2PERCENTAGE=htmlspecialchars(strip_tags($this->MSD_EDU2PERCENTAGE));
$this->MSD_EDU2QUAL=htmlspecialchars(strip_tags($this->MSD_EDU2QUAL));
$this->MSD_EDU2SCHOOL=htmlspecialchars(strip_tags($this->MSD_EDU2SCHOOL));
$this->MSD_EDU2YEAR=htmlspecialchars(strip_tags($this->MSD_EDU2YEAR));
$this->MSD_EDU3BOARD=htmlspecialchars(strip_tags($this->MSD_EDU3BOARD));
$this->MSD_EDU3CITY=htmlspecialchars(strip_tags($this->MSD_EDU3CITY));
$this->MSD_EDU3MED=htmlspecialchars(strip_tags($this->MSD_EDU3MED));
$this->MSD_EDU3PERCENTAGE=htmlspecialchars(strip_tags($this->MSD_EDU3PERCENTAGE));
$this->MSD_EDU3QUAL=htmlspecialchars(strip_tags($this->MSD_EDU3QUAL));
$this->MSD_EDU3SCHOOL=htmlspecialchars(strip_tags($this->MSD_EDU3SCHOOL));
$this->MSD_EDU3YEAR=htmlspecialchars(strip_tags($this->MSD_EDU3YEAR));
$this->MSD_EMAIL=htmlspecialchars(strip_tags($this->MSD_EMAIL));
$this->MSD_FATHERNAME=htmlspecialchars(strip_tags($this->MSD_FATHERNAME));
$this->MSD_GENDER=htmlspecialchars(strip_tags($this->MSD_GENDER));
$this->MSD_ISACTIVE=htmlspecialchars(strip_tags($this->MSD_ISACTIVE));
$this->MSD_IsHSC=htmlspecialchars(strip_tags($this->MSD_IsHSC));
$this->MSD_ISMODIFIED=htmlspecialchars(strip_tags($this->MSD_ISMODIFIED));
$this->MSD_IsSSC=htmlspecialchars(strip_tags($this->MSD_IsSSC));
$this->MSD_IsUG=htmlspecialchars(strip_tags($this->MSD_IsUG));
$this->MSD_LOCALITY=htmlspecialchars(strip_tags($this->MSD_LOCALITY));
$this->MSD_NAME=htmlspecialchars(strip_tags($this->MSD_NAME));
$this->MSD_PIN=htmlspecialchars(strip_tags($this->MSD_PIN));
$this->MSD_PK=htmlspecialchars(strip_tags($this->MSD_PK));
$this->MSD_PRIMARYMOBILE =htmlspecialchars(strip_tags($this->MSD_PRIMARYMOBILE));
$this->MSD_PROOFURL=htmlspecialchars(strip_tags($this->MSD_PROOFURL));
$this->MSD_REGNO=htmlspecialchars(strip_tags($this->MSD_REGNO));
$this->MSD_REQUESTEDDATE =htmlspecialchars(strip_tags($this->MSD_REQUESTEDDATE));
$this->MSD_STATE=htmlspecialchars(strip_tags($this->MSD_STATE));
$this->MSD_STREETADRS=htmlspecialchars(strip_tags($this->MSD_STREETADRS));
$this->MSD_TERMSAPPROVED =htmlspecialchars(strip_tags($this->MSD_TERMSAPPROVED));

    // bind values
    $stmt->bindParam(":MSD_ACHIEVEMENTS", $this->MSD_ACHIEVEMENTS);
    $stmt->bindParam(":MSD_ALTMOBILE", $this->MSD_ALTMOBILE);
    $stmt->bindParam(":MSD_CITY", $this->MSD_CITY);
    $stmt->bindParam(":MSD_COMMENTS", $this->MSD_COMMENTS);
    $stmt->bindParam(":MSD_CREATEDDATETIME", $this->MSD_CREATEDDATETIME);
    $stmt->bindParam(":MSD_DOB", $this->MSD_DOB);
    $stmt->bindParam(":MSD_DPURL", $this->MSD_DPURL);
    $stmt->bindParam(":MSD_EDU1BOARD", $this->MSD_EDU1BOARD);
    $stmt->bindParam(":MSD_EDU1CITY", $this->MSD_EDU1CITY);
    $stmt->bindParam(":MSD_EDU1MED", $this->MSD_EDU1MED);
    $stmt->bindParam(":MSD_EDU1PERCENTAGE", $this->MSD_EDU1PERCENTAGE);
    $stmt->bindParam(":MSD_EDU1QUAL", $this->MSD_EDU1QUAL);
    $stmt->bindParam(":MSD_EDU1SCHOOL", $this->MSD_EDU1SCHOOL);
    $stmt->bindParam(":MSD_EDU1YEAR", $this->MSD_EDU1YEAR);
    $stmt->bindParam(":MSD_EDU2BOARD", $this->MSD_EDU2BOARD);
    $stmt->bindParam(":MSD_EDU2CITY", $this->MSD_EDU2CITY);
    $stmt->bindParam(":MSD_EDU2MED", $this->MSD_EDU2MED);
    $stmt->bindParam(":MSD_EDU2PERCENTAGE", $this->MSD_EDU2PERCENTAGE);
    $stmt->bindParam(":MSD_EDU2QUAL", $this->MSD_EDU2QUAL);
    $stmt->bindParam(":MSD_EDU2SCHOOL", $this->MSD_EDU2SCHOOL);
    $stmt->bindParam(":MSD_EDU2YEAR", $this->MSD_EDU2YEAR);
    $stmt->bindParam(":MSD_EDU3BOARD", $this->MSD_EDU3BOARD);
    $stmt->bindParam(":MSD_EDU3CITY", $this->MSD_EDU3CITY);
    $stmt->bindParam(":MSD_EDU3MED", $this->MSD_EDU3MED);
    $stmt->bindParam(":MSD_EDU3PERCENTAGE", $this->MSD_EDU3PERCENTAGE);
    $stmt->bindParam(":MSD_EDU3QUAL", $this->MSD_EDU3QUAL);
    $stmt->bindParam(":MSD_EDU3SCHOOL", $this->MSD_EDU3SCHOOL);
    $stmt->bindParam(":MSD_EDU3YEAR", $this->MSD_EDU3YEAR);
    $stmt->bindParam(":MSD_EMAIL", $this->MSD_EMAIL);
    $stmt->bindParam(":MSD_FATHERNAME", $this->MSD_FATHERNAME);
    $stmt->bindParam(":MSD_GENDER", $this->MSD_GENDER);
    $stmt->bindParam(":MSD_ISACTIVE", $this->MSD_ISACTIVE);
    $stmt->bindParam(":MSD_IsHSC", $this->MSD_IsHSC);
    $stmt->bindParam(":MSD_ISMODIFIED", $this->MSD_ISMODIFIED);
    $stmt->bindParam(":MSD_IsSSC", $this->MSD_IsSSC);
    $stmt->bindParam(":MSD_IsUG", $this->MSD_IsUG);
    $stmt->bindParam(":MSD_LOCALITY", $this->MSD_LOCALITY);
    $stmt->bindParam(":MSD_NAME", $this->MSD_NAME);
    $stmt->bindParam(":MSD_PIN", $this->MSD_PIN);
    $stmt->bindParam(":MSD_PK", $this->MSD_PK);
    $stmt->bindParam(":MSD_PRIMARYMOBILE", $this->MSD_PRIMARYMOBILE);
    $stmt->bindParam(":MSD_PROOFURL", $this->MSD_PROOFURL);
    $stmt->bindParam(":MSD_REGNO", $this->MSD_REGNO);
    $stmt->bindParam(":MSD_REQUESTEDDATE", $this->MSD_REQUESTEDDATE);
    $stmt->bindParam(":MSD_STATE", $this->MSD_STATE);
    $stmt->bindParam(":MSD_STREETADRS", $this->MSD_STREETADRS);
    $stmt->bindParam(":MSD_TERMSAPPROVED", $this->MSD_TERMSAPPROVED);
    
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;   
}
}