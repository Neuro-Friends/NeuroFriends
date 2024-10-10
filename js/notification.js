window.onload = function () {

    if (!getCookie("modalClosed")) {
      console.log("Modal cookie not found, showing modal.");
      var myModal = new bootstrap.Modal(
        document.getElementById("welcomeModal")
      );
      myModal.show();

      document.querySelector(".main-content").classList.add("blurred");

      var modalElement = document.getElementById("welcomeModal");
      modalElement.addEventListener("hidden.bs.modal", function () {
        console.log("Modal closed, removing blur.");
        document.querySelector(".main-content").classList.remove("blurred");

        setCookie("modalClosed", "true", 7);
        console.log("Cookie set after modal close.");
      });


      var closeButton = document.querySelector(".modal-footer button");
      closeButton.addEventListener("click", function () {
        console.log("Button clicked, removing blur and setting cookie.");
        document.querySelector(".main-content").classList.remove("blurred");
        setCookie("modalClosed", "true", 7);


        myModal.hide();
      });
    } else {
      console.log("Modal cookie found, not showing modal.");
    }
  };


  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    console.log("Cookie set: " + name + "=" + value);
  }


  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim(); 
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }