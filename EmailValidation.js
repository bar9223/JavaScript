var MyApp = window.MyApp || {};

MyApp.validator = {
  isString: function (str) {
    return typeof str === 'string';
  },

  isEmail: function (str) {
    if (!this.isString(str)) {
      return false;
    }
    // ......
    return // true lub false
  },
  isUrl: function (str) {
    if (!this.isString(str)) {
      return false;
    }
    // ......
    return // true lub false
  }
};


MyApp.validator = (function () {
  function isString(str) {
    return typeof str === 'string';
  }

  return {
    isEmail: function (str) {
      if (!isString(str)) {
        return false;
      }
      // ......
      return // true lub false
    },
    isUrl: function (str) {
      if (!isString(str)) {
        return false;
      }
      // ......
      return // true lub false
    }
  };
}());


MyApp.validator.isEmail('aaa@ddd.com'); // true
MyApp.validator.isEmail('dasasdasd'); // false
MyApp.validator.isUrl('http://google.com'); // true
MyApp.validator.isEmail('dasasdasd'); // false
MyApp.validator.isEmail(1); // false
MyApp.validator.isUrl(1); // false
MyApp.validator.isString() // Error/* 


