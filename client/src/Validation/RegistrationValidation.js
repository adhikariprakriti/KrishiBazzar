const validateInfo=(values)=>{
    let errors={}
   
    //i_am
    if (values.i_am.length===0){
        errors.i_am="please select one option"
    }
    //firstName
    if (values.firstName.trim().length===0){
        errors.firstName="firstName is required"
    }
    //lastName
    if (values.lastName.trim().length===0){
        errors.lastName="lastName is required"
    }
   
    //provienceNumber
    if (values.provienceNumber.trim().length===0){
        errors.provienceNumber="Provience Number required"
    }
    //city
    if (values.city.trim().length===0){
        errors.city="city required"
    }
    //district
    if (values.district.trim().length===0){
        errors.district="district required"
    }
    //email
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(values.email.length!==0 && !pattern.test(values.email)){
        errors.email="please enter valid email address.";
    }
    //phone number
    var phoneno = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    if(values.phoneNo.trim().length===0){
        errors.phoneNo="Phone number required";
    }
    else if(!phoneno.test(values.phoneNo)){
        errors.phoneNo="please enter a valid phone number";
    }
  
    //password
    if (values.password.length===0){
        errors.password="password required"
    }else if(values.password.length<6){
        errors.password="password should not be less than 6 characters"
    }
   
  
    //confirmPassword
    if (values.confirmPassword.length===0){
        errors.confirmPassword="password required"
    }else if(values.password !== values.confirmPassword){
        errors.confirmPassword="both passwords should match"
    }
    return errors;
 }
 export default validateInfo;
 