describe('Address book', function(){
  it('should be able to add a contact', function(){
    var addressBook = new AddressBook();
    var contact = new Contact();
    addressBook.addContact(contact);
    expect(addressBook.getContact(0)).toBe(contact);
  });

  it('should be able to delete a contact',function(){
    var addressBook = new AddressBook();
    var contact = new Contact();
    addressBook.addContact(contact);
    addressBook.deleteContact(0);
    expect(addressBook.getContact(0)).not.toBeDefined();

  });
});
