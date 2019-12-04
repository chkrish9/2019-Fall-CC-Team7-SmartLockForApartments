"use strict";

// Put variables in global scope to make them available to the browser console.
const video = document.querySelector("video");
var codes = [
  "345354",
  "250081",
  "294799",
  "498730",
  "435208",
  "935335",
  "679390"
];
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
  $(".message-success").hide();
  $(".message-fail").hide();
  $(".message-success").click(function() {
    $(".message-success").hide();
    $("#txtPassCode").val("");
  });
  $(".message-fail").click(function() {
    $(".message-fail").hide();
    $("#txtPassCode").val("");
  });
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
    takepicture();
    $(".message-success").hide();
    $(".message-fail").hide();
    let passcode = $("#txtPassCode").val();

    if (passcode != "") {
      $(".message-success").show();
      codes.splice(codes.indexOf(passcode), 1);
    } else {
      $(".message-fail").show();
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

function takepicture() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  context.drawImage(video, 0, 0, 480, 360);

  var data = canvas.toDataURL("image/png");
  var postData = {
    base64image: data
  };
  $.ajax({
    url: "http://localhost:3000/home/upload/image",
    dataType: "text",
    type: "post",
    contentType: "application/x-www-form-urlencoded",
    data: postData,
    success: function(data, textStatus, jQxhr) {
      console.log(data);
    },
    error: function(jqXhr, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
}
