ReddyReader.Session = function(loginBtnSelector, loginLightboxSelector, registerBtnSelector, registerLightboxSelector, closeBtnSelector) {
  var sessionView = new ReddyReader.SessionView(loginBtnSelector, loginLightboxSelector, registerBtnSelector, registerLightboxSelector, closeBtnSelector);
  new ReddyReader.SessionController(sessionView);
}
