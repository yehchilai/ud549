function AddressBook(){
  this.contacts=[];
  this.initialComplete = false;
}
/* The same with the following */
// var AddressBook = function (){
//   this.contacts=[];
// }

AddressBook.prototype.getInitialContacts = function(cb) {
  var self = this;

  setTimeout(function(){
    self.initialComplete = true;
    if(cb){
      return cb();
    }
  },30);
};

AddressBook.prototype.addContact = function(Contact) {
  this.contacts.push(Contact);
};

AddressBook.prototype.getContact = function(index) {
  return this.contacts[index];
};

AddressBook.prototype.deleteContact = function(index) {
  this.contacts.splice(index,1);
};
