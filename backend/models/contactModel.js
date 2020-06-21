const db = require('../utils/database');

class Message {
  constructor(name, email, subject, message) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
  }
  save() {
    const query =
      'INSERT INTO message(message_creator_name,message_creator_email,message_creator_subject,message_creator_message) VALUES(?,?,?,?)';
    return db.execute(query, [
      this.name,
      this.email,
      this.subject,
      this.message,
    ]);
  }
}

module.exports = Message;
