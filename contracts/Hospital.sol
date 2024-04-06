// SPDX-License-Identifier:MIT
pragma solidity >=0.8.0;
contract Hospital{

  address public owner;                           
  address public staff;
  mapping (address => doctor) private Doctors;     
  mapping (address => patient) private Patients;   
  mapping (address => mapping(address => uint16)) private patientToDoctor;      
  doctor[] private docList;
  address[] private pList;
  Appointment[] private apList;
  uint ap_No;
  
  struct Appointment{
    uint no;
    address id;
    string name;
    string contact;
    string deptToVisit;
    string timeSlot;
  }

  struct patient{
      string name;
      string dob;
      uint64 adhaar_number;
      string gender;
      string contact;
      address id;
      string[] files; 
      address[] doctor_list;
  }

  struct doctor{
    string name;
    uint64 adhaar_number;
    string contact;
    string specialization;
    address id;
    address[] patient_list;
  }

  constructor(address _s){
    owner = msg.sender;
    staff = _s;
    ap_No = 0;
  }

  modifier checkDoctor(address id){
      doctor memory d = Doctors[id];
      require( d.id > address(0x0) ,"You are not an authorized Doctor");
      _;
  }
  modifier checkPatient(address id){
      patient memory p = Patients[id];
      require( p.id > address(0x0),"You are not an authorized Patient");
      _;
  }
  modifier onlyOwner(){
      require(msg.sender == owner,"You are not the authorized Owner");
      _;
  }
  modifier onlyStaff(){
      require(msg.sender == staff,"You are not the authorized Staff");
      _;
  }

  event patientRegister( address _patient, string message);
  event doctorRegister(address _doctor, string message);
  event revokeDoctorAccess(address patient_address, string message, string _doctor, address doctor_address);
  event grantDoctorAccess( address patient_address, string message, string _doctor, address doctor_address);


  function changeStaff(address _a) onlyOwner external {
    staff = _a;
  }
 
  function getPatientDetails() external view checkPatient(msg.sender) returns(patient memory){  //only Patient
    patient memory p = Patients[msg.sender];
    return p;
  }

  function getAllPatient() external view returns(address[] memory){
    return pList;
  }

  // function getOnlyPatient()external view returns(){}
  function uploadDocs(string memory  _file) external checkPatient(msg.sender){
    patient storage p = Patients[msg.sender];
    p.files.push(_file);
  }
  
  
  function addPatient(string memory _name,string memory _DOB,string memory _contact,string memory _gen,uint64 _adhaar_number,address _ad) onlyStaff external{
    patient storage p = Patients[_ad];
    require(!(p.id > address(0x0)));
    Patients[_ad] = patient({name:_name,dob:_DOB,id:_ad,adhaar_number:_adhaar_number,gender:_gen,contact:_contact,files:new string[](0),doctor_list:new address[](0)});
    pList.push(_ad);
    emit patientRegister( _ad, "Registered as Patient");
  }

  function getDoctorInfo(address _d) external view  returns(doctor memory){
    doctor memory d = Doctors[_d];    
    return d;
  }

  function getDoctors() external view returns(doctor[] memory){
    return docList;
  }

  function addDoctor(string memory _name, string memory _contact, string memory _specialization,uint64 _adhaar_number,address _ad) onlyOwner external{
      doctor storage d = Doctors[_ad];
      require(!(d.id > address(0x0)));
      Doctors[_ad] = doctor({name:_name,id:_ad,adhaar_number:_adhaar_number,contact:_contact,specialization:_specialization,patient_list:new address[](0)});
      docList.push(doctor({name:_name,id:_ad,adhaar_number:_adhaar_number,contact:_contact,specialization:_specialization,patient_list:new address[](0)}));
      emit doctorRegister(_ad, "Registered as Doctor");
  }

  