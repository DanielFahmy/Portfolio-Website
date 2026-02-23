const sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function() {
    const refreshHeading = document.getElementById("refresh");
    
    refreshHeading.addEventListener("click", function() {
      // Scroll back to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  
      // Reload the page after scrolling to the top
      setTimeout(function() {
        location.reload();
      }, 1000); // Adjust the delay as needed
    });
  });
  
  
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        
        if (target) {
          let offset = 0; // Default offset value
          
          if (target.classList.contains("home")) {
            offset = 400; // Adjust offset for section 1
          } else if (target.classList.contains("about")) {
            offset = window.innerWidth <= 600 ? 90 : 160; // Adjust offset for section 2
          } else if (target.classList.contains("skills")) {
            offset = window.innerWidth <= 600 ? -38 : 40; // Adjust offset for section 3
          } else if (target.classList.contains("portfolio")) {
            offset = window.innerWidth <= 600 ? -38 : 20; // Adjust offset for section 4
          } else if (target.classList.contains("contact")) {
            offset = window.innerWidth <= 600 ? -38 : 40; // Adjust offset for section 5
          }
          
          window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
          });
        }
      });
    });
  });
  
  // Form submission handler
  const form = document.querySelector('form[action*="formspree"]');
  const msg = document.getElementById("msg");
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const action = form.getAttribute('action');
      
      fetch(action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          msg.innerHTML = "<span style='color: #61b752; font-weight: bold;'>Submitted</span>";
          form.reset();
          setTimeout(function() {
            msg.innerHTML = "";
          }, 4000);
        }
      }).catch(error => {
        msg.innerHTML = "<span style='color: red;'>Error sending message</span>";
        console.error('Error:', error);
      });
    });
  }