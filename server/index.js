const express = require('express')
const app = express();
const controller = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messagesBaseUrl = "/api/messages";

app.get(messagesBaseUrl, controller.read);
app.post(messagesBaseUrl, controller.create);
app.put(`${messagesBaseUrl}/:id`, controller.update);
app.delete(`${messagesBaseUrl}/:id`, controller.delete);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`its working yo ${PORT}`)
});



