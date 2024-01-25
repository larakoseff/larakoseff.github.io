
// Mobile dropdown menu

document.addEventListener("DOMContentLoaded", function () {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const closeBtn = document.querySelector(".close-btn");

    dropbtn.addEventListener("click", function () {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    closeBtn.addEventListener("click", function () {
        dropdownContent.style.display = "none";
    });
});

// Contact form 



// const btn = document.getElementById('btn')
// btn.addEventListener('click', function (e) {
//   e.preventDefault()
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const subject = document.getElementById('subject').value;
//   const message = document.getElementById('message').value;
//   const body = 'name: ' + name + '<br/> email:  ' + email + '<br/> subject: ' + subject + '<br/> message:  ' + message;

//     Email.send({
//       SecureToken: "9411fb2e-ac60-46ad-9d0f-8b1155e0854b",
//       To: 'mardouthegnu@gmail',
//       From: "larakoseff@gmail.com",
//       Subject: "contact message",
//       Body: body
//     }).then(
//       message => alert("Thank you for your message, I'll get back to you shortly.")
//     );
// })

