describe("SessionView", function(){
  it("displays the login form when the login button is clicked", function(){
    $('#modal_login').trigger('click');
    expect('body').toContain('#login_lightbox');
  })
});
