'use strict';

exports.register = function (server, options, next) {
	server.register([
		{
			register: require('./lib/db')
		}
	], next);
};

exports.register.attributes = {
	pkg: require('./package.json')
};
