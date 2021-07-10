var requestDonation = document.querySelectorAll('.request-donation-preview'),
    donate = document.querySelectorAll('.donate-preview');

requestDonation.forEach(function (el) {

  var popup = el.children[1];

  el.children[0].onclick = function () {

    popup.classList.add('active');
  };

  popup.children[0].onclick = popup.children[2].onclick = function () {

    popup.classList.remove('active');
  };

  window.addEventListener('keydown', function (e) {

    if (e.key == 'Escape') {

      popup.classList.remove('active');
    }
  });
});

donate.forEach(function (el) {

  var popup = el.children[1];

  el.children[0].onclick = function () {

    popup.classList.add('active');
  };

  popup.children[0].onclick = popup.children[2].onclick = function () {

    popup.classList.remove('active');
  };

  window.addEventListener('keydown', function (e) {

    if (e.key == 'Escape') {

      popup.classList.remove('active');
    }
  });
});