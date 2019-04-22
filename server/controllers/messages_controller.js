let messages = [];
let id = 0;

module.exports = {
  create: (request, response) => {
    const { text, time } = request.body;
    messages.push({ id, text, time });
    id++;
    response.status(200).send(messages);
  },

  read: (request, response) => {
    response.status(200).send(messages);
  },

  update: (request, response) => {
    const { text } = request.body;
    const updateID = request.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: updateID,
      text: text || message.text
};
    response.status(200).send(messages);
  },

  delete: (request, response) => {
    const deleteId = request.params.id;
    messageIndex = messages.findIndex(message => message.id == deleteId);
    messages.splice(messageIndex, 1);
    response.status(200).send(messages);
  }
};
