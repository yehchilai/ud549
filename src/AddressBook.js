function AddressBook(){
  this.contacts=[];
}
/* The same with the following */
// var AddressBook = function (){
//   this.contacts=[];
// }

AddressBook.prototype.addContact = function(Contact) {
  this.contacts.push(Contact);
};

AddressBook.prototype.getContact = function(index) {
  return this.contacts[index];
};

AddressBook.prototype.deleteContact = function(index) {
  this.contacts.splice(index,1);
};
