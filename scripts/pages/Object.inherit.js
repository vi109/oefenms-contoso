(function () {
  "use strict";

  var copyOwnProperties = function (from, to) {
    for (var propertyName in from) {
      if (from.hasOwnProperty(propertyName)) {
        to[propertyName] = from[propertyName];
      }
    }
  };

  var inherit = function (additionalProperties) {
    var subclass = Object.create(this);

    subclass.create = function () {
      var prototype = (this && this !== window) ? this : subclass;
      var instance = Object.create(prototype);

      if (typeof instance.initialize === "function") {
        instance.initialize.apply(instance, arguments);
      }
      return instance;
    };
    copyOwnProperties(additionalProperties, subclass);
    return subclass;
  };
  Object.inherit = inherit;
}());
