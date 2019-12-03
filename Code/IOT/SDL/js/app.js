"use strict";

// Put variables in global scope to make them available to the browser console.
const video = document.querySelector("video");

const constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log(
    "navigator.MediaDevices.getUserMedia error: ",
    error.message,
    error.name
  );
}

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(handleSuccess)
  .catch(handleError);
$(document).ready(function() {
  $(".num").click(function() {
    console.log(parseInt(this.innerText));
    if (this.innerText !== "")
      $("#txtPassCode").val($("#txtPassCode").val() + this.innerText);
    else {
      $("#txtPassCode").val(
        $("#txtPassCode")
          .val()
          .slice(0, -1)
      );
    }
  });
  $(".enter").click(function() {
    let passcode = $("#txtPassCode").val();
    let codes = ["345354","250081","294799","498730","435208"]
    if(codes.indexOf(passcode) > -1){
      console.log("hi");
    }
  });
  $(".delete").click(function() {
    $("#txtPassCode").val(
      $("#txtPassCode")
        .val()
        .slice(0, -1)
    );
  });
});
