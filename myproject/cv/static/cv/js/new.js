// INSTITUTION ATTENDED


$(document).ready(function() {
            var max_fields = 10;
            var wrapper = $(".addmorecontainer1");
            var add_button = $(".add_form_field");
        
            var x = 1;
            $(add_button).click(function(e) {
                e.preventDefault();
                if (x < max_fields) {
                    x++;
                    $(wrapper).append('<div style="margin-top:25px"><label>Institution Attended:</label><br><input type="text" name="institution[]" placeholder="e.g Petroleum Training Institute" class="institution" ><label>Qualification</label> <input type="text" name="qualification[]" id="" class="institution"> <label>Year:</label><input type="text" name="instituteyear[]"><br><br><a href="javascript:void(0);" class="delete">Delete</a></div>'); //add input box
                } else {
                    alert('You Reached the limit')
                }
            });
        
            $(wrapper).on("click", ".delete", function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
        });



// QUALIFICATIONS OBTAINED



$(document).ready(function() {
            var max_fields2 = 10;
            var wrapper2 = $(".addmorecontainer2");
            var add_button2 = $(".add_form_field2");
        
            var x = 1;
            $(add_button2).click(function(e) {
                e.preventDefault();
                if (x < max_fields2) {
                    x++;
                    $(wrapper2).append('<div style="margin-top:25px"><label>Course of Study</label><br><input type="text" name="coursestudy[]" placeholder="e.g Mechanical Engineering" class="institution2"> <label>Qualification</label><input type="text" name="qualificationin[]" id="" class="institution2"><br><br><label>Year Complited</label><input type="text" name="yearcomploted[]"><br><br><a href="javascript:void(0);" class="delete2">Delete</a></div>'); //add input box
                } else {
                    alert('You Reached the limit')
                }
            });
        
            $(wrapper2).on("click", ".delete2", function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
        });



// WORK EXPERIENCE


$(document).ready(function() {
            var max_fields3 = 10;
            var wrapper3 = $(".addmorecontainer3");
            var add_button3 = $(".add_form_field3");
        
            var x = 1;
            $(add_button3).click(function(e) {
                e.preventDefault();
                if (x < max_fields3) {
                    x++;
                    $(wrapper3).append('<div style="margin-top:25px"><label class="cvreglabel">Organization:</label><br><input type="text" name="organizationname[]" placeholder="Name of Organization" class="cvtext"><br><label class="cvreglabel">Address</label><br><input type="text" name="organizationaddress[]" class="cvtext"><br><label class="cvreglabel">Position</label><br><input type="text" name="Position[]" class="cvtext"><br><label class="cvreglabel">Daily Tasks</label><br><textarea name="dailytask[]"></textarea><br><br><label class="cvreglabel">From: </label><input type="text" name="yearfrom[]" style="margin-right:25%"><label class="cvreglabel" style="margin-left:10%">To: </label><input type="text" name="yearto[]"><br><br><br><a href="javascript:void(0);" class="delete3">Delete</a></div>'); //add input box
                } else {
                    alert('You Reached the limit')
                }
            });
        
            $(wrapper3).on("click", ".delete3", function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
        });




// CERTIFICATION OBTAINED


$(document).ready(function() {
            var max_fields4 = 10;
            var wrapper4 = $(".addmorecontainer4");
            var add_button4 = $(".add_form_field4");
        
            var x = 1;
            $(add_button4).click(function(e) {
                e.preventDefault();
                if (x < max_fields4) {
                    x++;
                    $(wrapper4).append('<div style="margin-top:25px"><label>Name of certification:</label><br><input type="text" name="nameofcertification[]" placeholder="Name of Organization"><br><br><label>Date Obtained: </label><input type="text" name="dateofcertification[]" style="margin-right:30%;"><br><br><br><a href="javascript:void(0);" class="delete4">Delete</a></div>'); //add input box
                } else {
                    alert('You Reached the limit')
                }
            });
        
            $(wrapper4).on("click", ".delete4", function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
        });



// SKILLS

$(document).ready(function() {
            var max_fields5 = 15;
            var wrapper5 = $(".addmorecontainer5");
            var add_button5 = $(".add_form_field5");
        
            var x = 1;
            $(add_button5).click(function(e) {
                e.preventDefault();
                if (x < max_fields5) {
                    x++;
                    $(wrapper5).append('<div style="margin-top:25px"><input type="text" class="cvtext" name="skills[]" style="width:70%;"><a href="javascript:void(0);" class="delete5" style="margin-left:3%;">Delete</a></div>'); //add input box
                } else {
                    alert('You Reached the limit')
                }
            });
       
            $(wrapper5).on("click", ".delete5", function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
        });






// LANGUAGES


$(document).ready(function() {
            var max_fields6 = 5;
            var wrapper6 = $(".addmorecontainer6");
            var add_button6 = $(".add_form_field6");
        
            var x = 1;
            $(add_button6).click(function(e) {
                e.preventDefault();
                if (x < max_fields6) {
                    x++;
                    $(wrapper6).append('<div style="margin-top:25px"><input class="cvtext" type="text" class="cvtext" name="languages[]" style="width:70%;"><a href="javascript:void(0);" class="delete6" style="margin-left:3%;">Delete</a></div>'); //add input box
                } else {
                    alert('You Reached the limit')
                }
            });
       
            $(wrapper6).on("click", ".delete6", function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
        });





// HOBBIES

$(document).ready(function() {
            var max_fields7 = 10;
            var wrapper7 = $(".addmorecontainer7");
            var add_button7 = $(".add_form_field7");
        
            var x = 1;
            $(add_button7).click(function(e) {
                e.preventDefault();
                if (x < max_fields7) {
                    x++;
                    $(wrapper7).append('<div style="margin-top:25px"><input type="text" class="cvtext" name="hobbies[]" style="width:70%;"><a href="javascript:void(0);" class="delete7" style="margin-left:3%;">Delete</a></div>'); //add input box
                } else {
                    alert('You Reached the limit')
                }
            });
       
            $(wrapper7).on("click", ".delete7", function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
        });




// REFERENCES

$(document).ready(function() {
            var max_fields8 = 3;
            var wrapper8 = $(".addmorecontainer8");
            var add_button8 = $(".add_form_field8");
        
            var x = 1;
            $(add_button8).click(function(e) {
                e.preventDefault();
                if (x < max_fields8) {
                    x++;
                    $(wrapper8).append('<div style="margin-top:25px"><label class="cvreglabel">Full Name: </label><br><input type="text" name="refereename[]" placeholder="Full Name of referee" style="width:50%;" class="cvtext"><br><label class="cvreglabel">Title: </label><br><input type="text" name="refereetitle[]" placeholder="referee Position in organization" style="width:50%;" class="cvtext"><br><label class="cvreglabel">Organization: </label><br><input type="text" name="refereeorganization[]" placeholder="referee work place" style="width:50%;" class="cvtext"><br><label class="cvreglabel">Address: </label><br><input type="text" name="refereeaddress[]" placeholder="referee house Address" style="width:50%;" class="cvtext"><br><label class="cvreglabel">email: </label><br><input type="text" name="referee_email[]" placeholder="referee email Address" style="width:50%;" class="cvtext"><br><br><br><a href="javascript:void(0);" class="delete8">Delete</a></div>'); //add input box
                } else {
                    alert('You Reached the limit')
                }
            });
       
            $(wrapper8).on("click", ".delete8", function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
        });




// PROJECT 


$(document).ready(function() {
            var max_projectfield = 10;
            var projectwrapper = $(".addmoreproject");
            var add_projectbutton = $(".add_form_project");
        
            var x = 1;
            $(add_projectbutton).click(function(e) {
                e.preventDefault();
                if (x < max_projectfield) {
                    x++;
                    $(projectwrapper).append('<div style="margin-top:25px"><label class="cvreglabel">Project Title:</label><br><input class="cvtext" type="text" name="projecttitle[]" placeholder="Title of project"><br><br><label class="cvreglabel">Project Date: </label><input type="text" name="projectdate[]" style="margin-right:5%"><label class="cvreglabel">Role in project: </label><input type="text" class="cvtext" name="projectrole[]" placeholder="e.g Backend Development" style="width:30%;"><br><br><label class="cvreglabel">Brief Description: </label><br><textarea name="ProjectDescription[]"></textarea><br><br><br><a href="javascript:void(0);" class="deleteproject">Delete</a></div>'); //add input box
                } else {
                    alert('You Reached the limit')
                }
            });
       
            $(projectwrapper).on("click", ".deleteproject", function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
        });








// // login popup  

// function loginnav() {

// var login = document.getElementById("logindiv");

// login.style.display = "block";


// }


// // xbutton

// function xcancle(){
//     var xout = document.getElementById("logindiv");
//     xout.style.display = "none"
// }




// // signup popup toggle

// function signupbutton(){
//     var signup = document.getElementById("signuptog");
//     var login = document.getElementById("logintog");

//     login.style.display = "none";
//     signup.style.display = "block";
// }



// function loginbutton(){
    
//     var signup = document.getElementById("signuptog");
//     var login = document.getElementById("logintog");

//     login.style.display = "block";
//     signup.style.display = "none";
// }