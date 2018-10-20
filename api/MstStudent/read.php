<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/MstStudent.php';
 
// instantiate database and MstStudent object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$MstStudent = new MstStudent($db);
 
// query MstStudent
$stmt = $MstStudent->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // MstStudent array
    $MstStudent_arr=array();
    $MstStudent_arr["records"]=array();
 
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
 
        $MstStudent_item=array(
"MSD_CREATEDDATETIME"=>$MSD_CREATEDDATETIME
,"MSD_ACHIEVEMENTS"=>$MSD_ACHIEVEMENTS
,"MSD_ALTMOBILE"=>$MSD_ALTMOBILE
,"MSD_CITY"=>$MSD_CITY
,"MSD_COMMENTS"=>$MSD_COMMENTS
,"MSD_DOB"=>$MSD_DOB
,"MSD_DPURL"=>$MSD_DPURL
,"MSD_EDU1BOARD"=>$MSD_EDU1BOARD
,"MSD_EDU1CITY"=>$MSD_EDU1CITY
,"MSD_EDU1MED"=>$MSD_EDU1MED
,"MSD_EDU1PERCENTAGE"=>$MSD_EDU1PERCENTAGE
,"MSD_EDU1QUAL"=>$MSD_EDU1QUAL
,"MSD_EDU1SCHOOL"=>$MSD_EDU1SCHOOL
,"MSD_EDU1YEAR"=>$MSD_EDU1YEAR
,"MSD_EDU2BOARD"=>$MSD_EDU2BOARD
,"MSD_EDU2CITY"=>$MSD_EDU2CITY
,"MSD_EDU2MED"=>$MSD_EDU2MED
,"MSD_EDU2PERCENTAGE"=>$MSD_EDU2PERCENTAGE
,"MSD_EDU2QUAL"=>$MSD_EDU2QUAL
,"MSD_EDU2SCHOOL"=>$MSD_EDU2SCHOOL
,"MSD_EDU2YEAR"=>$MSD_EDU2YEAR
,"MSD_EDU3BOARD"=>$MSD_EDU3BOARD
,"MSD_EDU3CITY"=>$MSD_EDU3CITY
,"MSD_EDU3MED"=>$MSD_EDU3MED
,"MSD_EDU3PERCENTAGE"=>$MSD_EDU3PERCENTAGE
,"MSD_EDU3QUAL"=>$MSD_EDU3QUAL
,"MSD_EDU3SCHOOL"=>$MSD_EDU3SCHOOL
,"MSD_EDU3YEAR"=>$MSD_EDU3YEAR
,"MSD_EMAIL"=>$MSD_EMAIL
,"MSD_FATHERNAME"=>$MSD_FATHERNAME
,"MSD_GENDER"=>$MSD_GENDER
,"MSD_ISACTIVE"=>$MSD_ISACTIVE
,"MSD_IsHSC"=>$MSD_IsHSC
,"MSD_ISMODIFIED"=>$MSD_ISMODIFIED
,"MSD_IsSSC"=>$MSD_IsSSC
,"MSD_IsUG"=>$MSD_IsUG
,"MSD_LOCALITY"=>$MSD_LOCALITY
,"MSD_NAME"=>$MSD_NAME
,"MSD_PIN"=>$MSD_PIN
,"MSD_PK"=>$MSD_PK
,"MSD_PRIMARYMOBILE"=>$MSD_PRIMARYMOBILE
,"MSD_PROOFURL"=>$MSD_PROOFURL
,"MSD_REGNO"=>$MSD_REGNO
,"MSD_REQUESTEDDATE"=>$MSD_REQUESTEDDATE
,"MSD_STATE"=>$MSD_STATE
,"MSD_STREETADRS"=>$MSD_STREETADRS
,"MSD_TERMSAPPROVED"=>$MSD_TERMSAPPROVED
        );
 
        array_push($MstStudent_arr["records"], $MstStudent_item,count($MstStudent_item));
    }
 
    // set response code - 200 OK
    http_response_code(200);
    // show products data in json format
    echo json_encode($MstStudent_arr);
}
 
else{
    // set response code - 404 Not found
    http_response_code(404);
    // tell the user no products found
    echo json_encode(
        array("message" => "No Records found.")
    );
}
?>