const btns = document.querySelectorAll(".btn");
    const user = document.getElementById("user");
    const card2 = document.getElementById("thank-you");
    const score = document.getElementById("score");
    const card1 = document.getElementById("raitingcard");
    
    Array.from(btns).forEach(btn =>{
      btn.addEventListener("click", e =>{
      var raiting = e.target.textContent; 
      score.textContent = raiting;
      user.classList.add('active')
      user.addEventListener("click", e =>{
        event.preventDefault();
        card2.classList.remove('hide');
        card1.classList.add('hide');
        score.textContent = raiting;
      } )
      })
    })
