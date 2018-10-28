(function() {
  "use strict";

  var SpeakerBadgePage = Object.inherit({

    initialize: function (element){
      this.imageElement = element.querySelector("img");
      element.addEventListener("dragover", this.handleDragOver.bind(this), false);
      element.addEventListener("drop", this.handleDrop.bind(this), false);
    },

    handleDragOver: function (event) {
      event.stopPropagation();
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
    },

    handleDrop: function (event) {
      event.stopPropagation();
      event.preventDefault();

      var files = event.dataTransfer.files;

      if (files.length == 0) return;
      var file = files[0];
      if (this.isImageType(file.type)) {
        this.readFile(file).done(this.displayImage);
      } else {
        alert("Please drop an image file.");
      }
    },

    isImageType: function (type){
      var imageTypes = ["image/jpeg", "image/jpg", "image/png"];
      return imageTypes.indexOf(type) >= 0;
    },

    readFile: function (file) {
      var reading = $.Deferred();
      var context = this;

      var reader = new FileReader();
      reader.onload = function (loadEvent) {
        var fileDataUrl = loadEvent.target.result;
        reading.resolveWith(context, [fileDataUrl]);
      };

      reader.readAsDataURL(file);
      return reading;
    },

    displayImage: function (imageUrl) {
      this.imageElement.src = imageUrl;
    }
  });

  var badgeElement = document.querySelector(".badge");
  SpeakerBadgePage.create(badgeElement);

}());
