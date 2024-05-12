
export let say = function() {
	console.log('gg it works')
}

export let makeGetRequest = function(url) {
	return new Promise(function(resolve) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					console.error(xhr.status + ': ' + xhr.responseText);


				}
			}
		};

		xhr.send();
	});
}

export let makePostRequest = function(obj, url) {
	return new Promise(function(resolve) {
		const xhr = new XMLHttpRequest();
		xhr.open('POST', url);

		xhr.setRequestHeader("Content-type", "application/json");

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					console.error(xhr.status + ': ' + xhr.responseText);


				}
			}
		};

		
		xhr.send(JSON.stringify(obj));
	});
}

export let makeDeleteRequest = function(url) {
	return new Promise(function(resolve) {
		const xhr = new XMLHttpRequest();
		xhr.open('DELETE', url);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve(true);
				} else {
					console.error(xhr.status + ': ' + xhr.responseText);


				}
			}
		};

		xhr.send();
	});
}

export let makePutRequest = function(obj, url){
	return new Promise(function(resolve) {
		const xhr = new XMLHttpRequest();
		xhr.open('PUT', url);

		xhr.setRequestHeader("Content-type", "application/json");

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					console.error(xhr.status + ': ' + xhr.responseText);


				}
			}
		};

		
		xhr.send(JSON.stringify(obj));
	});
}









