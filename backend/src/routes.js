const url = require('url');

class Routes {
	#io
	constructor(io) {
		this.#io = io;
	}

	async post(request, response) {
		const { headers } = request;
		const { query: {socketId} } = url.parse(request.url, true);
		const redirectTo = headers.origin;

		this.#io.to(socketId).emit('file-uploaded', 5e9);
		this.#io.to(socketId).emit('file-uploaded', 5e9);
		this.#io.to(socketId).emit('file-uploaded', 5e9);
		this.#io.to(socketId).emit('file-uploaded', 5e9);

		const onfinish = (response, redirectTo) => {
			response.writeHead(303, {
				connection: 'close',
				location: `${redirectTo}?msg=Files uploaded with success!`});

			response.end()
		};


		setTimeout(() => {
			return onfinish(response, redirectTo);
		}, 2000)

	}
}

module.exports = Routes;
