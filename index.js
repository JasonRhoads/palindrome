module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
};

String.prototype.blank = function() {
  return !!(this.match(/^\s*$/g));
};

Array.prototype.last = function() {
  return this.slice(this.length - 1);
};

function emailParts(email) {
  return email.toLowerCase().split("@");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  
  this.processor = function(string) {
    return string.toLowerCase();
  };
  
  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  };

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"

  this.letters = function letters() {
    return (this.content.match(/[a-z]/ig) || []).join("");
  };

  
  // Returns true for a plaindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
  
  this.louder = function() {
    return this.content.toUpperCase();
  };
}


