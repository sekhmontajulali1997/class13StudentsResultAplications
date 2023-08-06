// get all tag form dom

const student_add = document.querySelector('#StudentsDataForm');
const message = document.querySelector('.message');
const DynamicStudentsList = document.querySelector('.DynamicStudentsList');
const Stpreview = document.querySelector('.Stpreview');
const EditStudentsDataForm = document.querySelector('#EditStudentsDataForm');

// show students data 

const ShowAllStudentsData = () => {
    const showLSData = getDataLs('studentsData');
    let studentsList = '';

    if (showLSData.length > 0) {
        showLSData.map((item, index) =>{
            studentsList += `
            <tr class="text-center align-middle">
                    <th scope="row">1</th>
                    <td><img style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;" src=" ${item.Students_Photo}" alt=""></td>
                    <td> ${item.Students_Name}</td>
                    <td> ${item.Students_Roll}</td>
                    <td> ${item.Students_Reg_No}</td>
                    <td> ${getFacebookPostTime(item.Create_At)}</td>
                    <td><button class="btn btn-warning"> Add Result</button></td>
                    <td>
                      <i class="fa-solid fa-eye bg-primary mouseee p-2" data-bs-toggle="modal" data-bs-target="#previewDataModal" onclick ="previewData('${item.Students_Reg_No}')"></i>
                      <i class="fa-solid fa-pen-to-square bg-warning mouseee p-2 mx-2" data-bs-toggle="modal" data-bs-target="#EditStudentsModal" onclick = "editDataa('${item.id}')"></i>
                      <i class="fa-solid fa-trash bg-danger mouseee p-2" onclick = " DeleteStudents('${item.Students_Roll}')"></i>
    
                    </td>
                  </tr>
                  <tr>
                
            
            `
            
        })
    }else{
        studentsList = ` <tr> <td colspan = '8'> <h3 style= 'text-align: center;'> Please Add Studdents </h3></td></tr>`
    }
    

    DynamicStudentsList.innerHTML = studentsList;

};
ShowAllStudentsData();

// Delete students list

const DeleteStudents = (roll) =>{
    const getLSdata = getDataLs('studentsData');
    const updataData = getLSdata.filter((data) => data.Students_Roll !== roll);
    sendDataLS('studentsData', updataData );
    ShowAllStudentsData();

};
//eye buttonn
const previewData = (Students_Reg_No) => {
    const oldprevData = getDataLs('studentsData');
    const findDataForPreview = oldprevData.find((data)=>data.Students_Reg_No === Students_Reg_No );

    Stpreview.innerHTML= `
    
    <div class="image">
    <img style="width: 100% ; object-fit: cover; border-radius: 5PX;" src="${findDataForPreview.students_Photo}" alt="">
  </div>
  <div class="stName">
    <H4 class="text-dark bg-warning my-2 p-2 rounded">${findDataForPreview.students_name}</H4>
  </div>
  <div class="STrOLL|| REG">
    <P class="text-light bg-primary my-2 p-2 rounded">${findDataForPreview.Students_Reg_No}</P>
  </div>
    `
    

};
// edit data
const editDataa = (id) =>{


    const oldlsdata = getDataLs('studentsData');
   const alldata = oldlsdata.find((data)=>data.id === id );

 EditStudentsDataForm.querySelector('input[name="Students_Name"]').value = alldata.Students_Name;
 EditStudentsDataForm.querySelector('input[name="Students_Roll"]').value = alldata.Students_Roll;
 EditStudentsDataForm.querySelector('input[name="Students_Reg_No"]').value = alldata.Students_Reg_No;
 EditStudentsDataForm.querySelector('input[name="Students_id"]').value = alldata.id;
 EditStudentsDataForm.querySelector('input[name="Students_Photo"]').value = alldata.Students_Photo;
 EditStudentsDataForm.querySelector('img#previewpho').setAttribute('src', alldata.Students_Photo);


};

 // update data after edit

EditStudentsDataForm.onsubmit = (e) => {
e.preventDefault();

const  editformData = new FormData(e.target);
const  acceptData = Object.fromEntries(editformData);



 const oldlsdata = getDataLs('studentsData');

  oldlsdata[oldlsdata.findIndex((data) => data.id === acceptData.Students_id )] = {  
    ...oldlsdata[oldlsdata.findIndex((data) => data.id === acceptData.Students_id )],
    ...acceptData,
  
  
   
  }

 

sendDataLS('studentsData', oldlsdata );
 ShowAllStudentsData();
};






// get form dataaa
student_add.onsubmit = (e) =>{
    e.preventDefault();

    const formDataa = new FormData(e.target);
    const objectData = Object.fromEntries(formDataa);

    // validation

    if (!objectData.Students_Name.trim() || !objectData.Students_Photo.trim() || !objectData.Students_Roll.trim() || !objectData.Students_Reg_No.trim()) {
        message.innerHTML = formValidation( 'All Fields Are Required', 'danger');
    }else{
        const preqvData = getDataLs('studentsData');

        // check same roll

       if (preqvData.some((data) => data.Students_Roll === objectData.Students_Roll)) {

        message.innerHTML = formValidation( 'This Roll Already Exit', 'danger');
        return
       };
          // check same reg

          if (preqvData.some((data) => data.Students_Reg_No === objectData.Students_Reg_No )) {
            message.innerHTML = formValidation( 'This reg Already Exit', 'danger');
            return
          }


        preqvData.push(
            {
                Students_Photo: objectData.Students_Photo,
                Students_Name: objectData.Students_Name,
                Students_Roll: objectData.Students_Roll,
                Students_Reg_No: objectData.Students_Reg_No,
                Create_At: Date.now(),
                id:generateRandomID(),
            }
           
    
        );
        sendDataLS('studentsData', preqvData );
        ShowAllStudentsData();
    
        e.target.reset();
        message.innerHTML = formValidation( ` ${objectData.Students_Name} Created Successfully`, "success");
    }




};
