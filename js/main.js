
  const sign_in_btn = document.querySelector('#sign-in-btn');
  const sign_up_btn = document.querySelector('#sign-up-btn');
  const containar   = document.querySelector('.containar');

  sign_up_btn.addEventListener('click', ()=>{
    containar.classList.add('sign-up-mode');
  });
  sign_in_btn.addEventListener('click', ()=>{
    containar.classList.remove('sign-up-mode');
  });


  window.onload = function() {
    lax.setup() // init
  
    const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
    }
  
    window.requestAnimationFrame(updateLax)
  }
