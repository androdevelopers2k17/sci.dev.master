<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate MstStudent object
include_once '../objects/MstStudent.php';
 
$database = new Database();
$db = $database->getConnection();
 
$MstStudent = new MstStudent($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
echo $data;
    // set MstStudent property values
$MstStudent->MSD_ACHIEVEMENTS= $data->MSD_ACHIEVEMENTS;
$MstStudent->MSD_ALTMOBILE= $data->MSD_ALTMOBILE;
$MstStudent->MSD_CITY= $data->MSD_CITY;
$MstStudent->MSD_COMMENTS= $data->MSD_COMMENTS;
$MstStudent->MSD_CREATEDDATETIME= $data->date('Y-m-d H:i:s');
$MstStudent->MSD_DOB= $data->MSD_DOB;
$MstStudent->MSD_DPURL= $data->MSD_DPURL;
$MstStudent->MSD_EDU1BOARD= $data->MSD_EDU1BOARD;
$MstStudent->MSD_EDU1CITY= $data->MSD_EDU1CITY;
$MstStudent->MSD_EDU1MED= $data->MSD_EDU1MED;
$MstStudent->MSD_EDU1PERCENTAGE= $data->MSD_EDU1PERCENTAGE;
$MstStudent->MSD_EDU1QUAL= $data->MSD_EDU1QUAL;
$MstStudent->MSD_EDU1SCHOOL= $data->MSD_EDU1SCHOOL;
$MstStudent->MSD_EDU1YEAR= $data->MSD_EDU1YEAR;
$MstStudent->MSD_EDU2BOARD= $data->MSD_EDU2BOARD;
$MstStudent->MSD_EDU2CITY= $data->MSD_EDU2CITY;
$MstStudent->MSD_EDU2MED= $data->MSD_EDU2MED;
$MstStudent->MSD_EDU2PERCENTAGE= $data->MSD_EDU2PERCENTAGE;
$MstStudent->MSD_EDU2QUAL= $data->MSD_EDU2QUAL;
$MstStudent->MSD_EDU2SCHOOL= $data->MSD_EDU2SCHOOL;
$MstStudent->MSD_EDU2YEAR= $data->MSD_EDU2YEAR;
$MstStudent->MSD_EDU3BOARD= $data->MSD_EDU3BOARD;
$MstStudent->MSD_EDU3CITY= $data->MSD_EDU3CITY;
$MstStudent->MSD_EDU3MED= $data->MSD_EDU3MED;
$MstStudent->MSD_EDU3PERCENTAGE= $data->MSD_EDU3PERCENTAGE;
$MstStudent->MSD_EDU3QUAL= $data->MSD_EDU3QUAL;
$MstStudent->MSD_EDU3SCHOOL= $data->MSD_EDU3SCHOOL;
$MstStudent->MSD_EDU3YEAR= $data->MSD_EDU3YEAR;
$MstStudent->MSD_EMAIL= $data->MSD_EMAIL;
$MstStudent->MSD_FATHERNAME= $data->MSD_FATHERNAME;
$MstStudent->MSD_GENDER= $data->MSD_GENDER;
$MstStudent->MSD_IsHSC= $data->MSD_IsHSC;
$MstStudent->MSD_IsSSC= $data->MSD_IsSSC;
$MstStudent->MSD_IsUG= $data->MSD_IsUG;
$MstStudent->MSD_LOCALITY= $data->MSD_LOCALITY;
$MstStudent->MSD_NAME= $data->MSD_NAME;
$MstStudent->MSD_PIN= $data->MSD_PIN;
$MstStudent->MSD_PK=  getGUID();
$MstStudent->MSD_PRIMARYMOBILE= $data->MSD_PRIMARYMOBILE;
$MstStudent->MSD_PROOFURL= $data->MSD_PROOFURL;
$MstStudent->MSD_REGNO= $data->MSD_REGNO;
$MstStudent->MSD_STATE= $data->MSD_STATE;
$MstStudent->MSD_STREETADRS= $data->MSD_STREETADRS;

 
    // create the MstStudent
    if($MstStudent->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("message" => "MstStudent was created."));
    }
 
    // if unable to create the MstStudent, tell the user
    else{
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create Student Record"));
    }
// }
 
// else{
 
//     http_response_code(400);
 
//     echo json_encode(array("message" => "Unable to create MstStudent. Data is incomplete."));
// }
function getGUID(){
    if (function_exists('com_create_guid')){
        return com_create_guid();
    }else{
        mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
        $charid = strtoupper(md5(uniqid(rand(), true)));
        $hyphen = chr(45);// "-"
        $uuid = chr(123)// "{"
            .substr($charid, 0, 8).$hyphen
            .substr($charid, 8, 4).$hyphen
            .substr($charid,12, 4).$hyphen
            .substr($charid,16, 4).$hyphen
            .substr($charid,20,12)
            .chr(125);// "}"
        return $uuid;
    }
}
?>