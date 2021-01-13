const http = require('http');
const socketIo = require('socket.io');

const PORT = 3000;

const handler = function (request, response) {
	const defaultRoute = async (request, response) => response.end('Hello!');

	return defaultRoute(request, response);
}

const server = http.createServer(handler);
const io = socketIo(server, {
	cors: {
		origin: "*",
		credentials: false
	}
})


io.on('connection', (socket) => console.log('someone connection', socket.id))

const	startServer = () => {
	const { address, port } = server.address()
	console.log(`app riunning at http://${address}:${port}`);
}


server.listen(PORT, startServer);
