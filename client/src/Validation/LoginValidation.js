const validateInfo=(values)=>{
    let errors={}
   
    //phone number
    var phoneno = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    if(values.phone.trim().length===0){
        errors.phoneNo="Phone number required";
    }
    else if(!phoneno.test(values.phone)){
        errors.phoneNo="please enter a valid phone number";
    }

  
    //password
    if (values.password.length===0){
        errors.password="password required"
    }else if(values.password.length<6){
        errors.password="password should not be less than 6 characters"
    }
   
    return errors;
 }
 export default validateInfo;
 