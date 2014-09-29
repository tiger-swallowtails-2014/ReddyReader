ReddyReader.SessionView = function(loginBtnSelector, loginLightboxSelector, registerBtnSelector, registerLightboxSelector, closeBtnSelector) {
  this.$loginBtn = $(loginBtnSelector);
  this.$loginLightbox = $(loginLightboxSelector);
  this.$registerBtn = $(registerBtnSelector);
  this.$registerLightbox = $(registerLightboxSelector);
  this.$closeBtn = $(closeBtnSelector);
  this.bindEventListeners();
}

ReddyReader.SessionView.prototype = {
  bindEventListeners: function() {
    this.$loginBtn.click(function(){
      this.$loginLightbox.slideUp();
      this.$registerLightbox.slideDown();
    }.bind(this));

    this.$registerBtn.click(function(){
      this.$registerLightbox.slideUp();
      this.$loginLightbox.slideDown();
    }.bind(this));

    this.$closeBtn.click(function(){
      this.$loginLightbox.slideUp();
      this.$registerLightbox.slideUp();
    }.bind(this));
  }
}
