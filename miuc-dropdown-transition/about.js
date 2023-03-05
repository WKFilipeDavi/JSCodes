function init() {
  buttonsEvent();
}

function buttonsEvent() {
  let aboutBtns = document.querySelectorAll('.team__member__btn');
  let aboutBios = document.querySelectorAll('.team__member__dropdown-content');

  aboutBtns.forEach(function(currentBtn) {
    currentBtn.addEventListener('click', function() {
      this.classList.toggle('hidden');
      this.nextElementSibling.classList.toggle("team__member__dropdown-content--active");
    });

  });

  aboutBios.forEach(function(currentBio) {
    currentBio.addEventListener('click', function() {
      this.classList.toggle("team__member__dropdown-content--active");
      setTimeout(() => {
        this.previousElementSibling.classList.toggle("hidden");
      }, 250);

    });
  });

}

export default {
  init,
}
