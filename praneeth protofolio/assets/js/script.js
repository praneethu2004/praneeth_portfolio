document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name||!email||!message){
        alert('Please fill all fields');
        return;
      }
      const modalEl = document.getElementById('successModal');
      if(modalEl){
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
        form.reset();
      } else {
        alert('Message sent — thank you!');
        form.reset();
      }
    });
  }
});
