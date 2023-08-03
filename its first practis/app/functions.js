// set students data to LS

const setDataToLS = ( key, data) => {

    localStorage.setItem(key, JSON.stringify(data))

}



// Get students data FORM LS

const getDataFormLS = (key) =>{

 if (localStorage.getItem(key)) {
    return  JSON.parse(localStorage.getItem(key));
} else{
    return [];
}

};

// alert for form fileds validations

const formValidationAlert = ( Message, type) => {

    return ` 
    <p class=" alert alert-${type} d-flex justify-content-between"> ${Message} <button class=" btn-close" data-bs-dismiss="alert"></button></p>
    
    `
};




