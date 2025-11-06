// jQuery-powered interactions
$(function() {
  // Mobile nav toggle
  $('#menuToggle').on('click', function(){
    $('.nav').toggle();
  });

  // Footer year
  $('#year').text(new Date().getFullYear());

  // Today's date for biodata
  const d = new Date();
  const pad = n => String(n).padStart(2,'0');
  const today = pad(d.getDate()) + '-' + pad(d.getMonth()+1) + '-' + d.getFullYear();
  $('#today').text(today);

  // Simple contact form validation
  $('#contactForm').on('submit', function(e){
    e.preventDefault();
    const name = $.trim($('input[name="name"]').val());
    const email = $.trim($('input[name="email"]').val());
    const msg = $.trim($('textarea[name="message"]').val());
    const agree = $('input[name="agree"]').is(':checked');
    let errors = [];
    if(name.length < 2) errors.push('Name must be at least 2 characters.');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email.');
    if(msg.length < 10) errors.push('Message must be at least 10 characters.');
    if(!agree) errors.push('Please confirm the information is correct.');

    if(errors.length){
      $('#formMsg').text(errors.join(' ')).css('color','#fca5a5');
    }else{
      $('#formMsg').text('Thanks! Your message has been recorded (demo).').css('color','#22d3ee');
      this.reset();
    }
  });
});
