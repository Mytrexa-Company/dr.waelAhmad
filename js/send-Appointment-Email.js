function emailSendtoDrAppointment(){
    var userName = document.getElementById('name').value;
    var UsEmail = document.getElementById('email').value;
    var UsPhone = document.getElementById('phone').value;
    var Usdate = document.getElementById('datepicker').value;
    var UsMessage = document.getElementById('message').value;

    var UsSubject = "New Appointment on " + Usdate;
      
    var messageBody22 = "<span style='font-weight: bold;color: rgb(41, 34, 146);'>Request to Book an Appointment</span> <br/>" + 
    "<span style='font-weight: bold;color: rgb(41, 34, 146);'>Name : </span>" + userName + 
    "<br/> <span style='font-weight: bold;color: rgb(41, 34, 146);'>Email : </span>" + UsEmail + 
    "<br/> <span style='font-weight: bold;color: rgb(41, 34, 146);'>Appointment Date : </span>" + Usdate +
    "<br/> <span style='font-weight: bold;color: rgb(41, 34, 146);'>Phone : </span>" + UsPhone + 
    "<br/> <span style='font-weight: bold;color: rgb(41, 34, 146);'>Message : </span>" + UsMessage;
    
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "CCC.Co.Email@gmail.com",
            Password : "9E5E9B982665952D2DBF69E9482B0B6A88E6",
            To : 'shekewawa@gmail.com',
            From : "CCC.Co.Email@gmail.com",
            Subject : UsSubject,
            Body : messageBody22
        }).then(
            document.getElementById("GetAppint").onclick=function(){
            window.location= "receipt-Email.html";}
        //   message => alert(message)
        );
    
    }