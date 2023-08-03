// get all from Dom 

const add_newStudents_form = document.querySelector('#add_newStudents_form');
const alerFormValidation = document.querySelector('.alerFormValidation');
const tableData = document.querySelector('.tableData');
const single_prview_student = document.querySelector('.single_prview');


// single data preview

const single_data_preview = (roll) =>{
    const allolddata = getDataFormLS('StudentsData');
    const singleData = allolddata.find((data)=>data.students_roll === roll);
    console.log(allolddata);

    single_prview_student.innerHTML = `
    
    <img style="width: 100%;" src="${singleData.students_photo}" alt="">
    <h4 class=" my-2">${singleData.students_name}</h4>
    <h4 class=" my-2">${singleData.students_roll} | ${singleData.students_reg_no}</h4>
    
    
    `

   // 
   

 };
 

// show all students data
const ShowAllSTData = () =>{

    const getSTData = getDataFormLS('StudentsData');
    let showData = '';
console.log(getSTData);
    if (getSTData.length > 0) {
        getSTData.map((item, index) =>{
            showData +=`

<tr class=" align-middle text-center ">
<th scope="row">1</th>
<td><img style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%;" src="${item.students_photo}" alt=""></td>
<td>${item.students_name}</td>
<td>${item.students_roll}</td>
<td>${item.students_reg_no}</td>
<td>Time</td>
<td> <Button class="btn btn-info"> Add Result </Button></td>
<td>
    <i  class="fa-solid fa-eye bg-secondary p-2" onclick= "single_data_preview('${item.students_roll}')" data-bs-toggle="modal" data-bs-target="#preview_students-modal"></i>
    <i class="fa-solid fa-pen-to-square bg-info p-2"></i>
    <i class="fa-solid fa-trash bg-danger p-2" onclick="delate('${item.students_roll}')"></i>

</td>
</tr>

            `
            
        })

        
        
    }else{
        showData = `<tr ><td colspan='8'> <h1 style=" text-align: center;"> Please Add Students </h1> </td></tr>`
    }
    tableData.innerHTML = showData;
}
ShowAllSTData();
// delateee

const delate = (roll) =>{
   
    const DT = getDataFormLS('StudentsData');
     const updateData = DT.filter((data)=> data.students_roll != roll);
    setDataToLS('StudentsData', updateData);
    ShowAllSTData();
    console.log(DT);

};




// get form data
add_newStudents_form.onsubmit = (e) =>{
    e.preventDefault();

    const SFormData = new FormData(e.target);
    const ObjectSFormData = Object.fromEntries(SFormData);

    // validation 

    if (!ObjectSFormData.students_photo.trim() || !ObjectSFormData.students_name.trim() || !ObjectSFormData.students_roll.trim() || !ObjectSFormData.students_reg_no.trim()) {

        alerFormValidation.innerHTML = formValidationAlert('Students Photo, Students name, Students Roll No, Students Reg No, its Required', 'danger')

        
    }else{

         const prevdata = getDataFormLS('StudentsData');

         prevdata.push({
            ... ObjectSFormData,
            result: null,

            

         });
        

        setDataToLS('StudentsData', prevdata);
        ShowAllSTData();
        e.target.reset();
    



    // const lsdata = getDataFormLS('StudentsData');

    // lsdata.push({

    //     students_photo: ObjectSFormData.students_photo,
    //     students_name: ObjectSFormData.students_name,
    //     students_roll: ObjectSFormData.students_roll ?? null,
    //     students_reg_no: ObjectSFormData.students_reg_no ?? null,
    //     post_time: Date.now(),

    // })
    // setDataToLS('StudentsData', lsdata);
    // ShowAllSTData();
    // e.target.reset();

   
 
}
};

