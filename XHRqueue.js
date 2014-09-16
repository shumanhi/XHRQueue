function XHRQueue() {

	this.requests = [];
	this.requests_key = {};

	if (typeof this.prototype.abortAll != 'function') {
		XHRQueue.prototype.abortAll = function () {
			for (var i in this.requests) {
				xhr = this.requests[i];
				xhr.abort();
			}
			return this;
		}
	}
	if (typeof this.prototype.addToQueue != 'function') {
		XHRQueue.prototype.addToQueue = function (xhrObj, key) {
			key = key || false;
			var _this = this;
			var always = xhrObj.always;
			xhrObj.always = function () {
				if(typeof always == 'function') always();
				_this.removeFromQueue(xhrObj, key);
			};
			if (key) {
				if (typeof _this.requests_key[key] == 'object') {
					_this.requests_key[key].abort();
				}
				_this.requests_key[key] = xhrObj;
			}
			else {
				_this.requests.push(xhrObj);
			}
			return this;
		}
	}
	if (typeof this.prototype.removeFromQueue != 'function') {
		XHRQueue.prototype.removeFromQueue = function (xhrObj, key) {
			if (key) {
				delete this.requests_key[key];
			}
			var i = this.requests.indexOf(xhrObj);
			if (i > 0) {
				this.requests.splice(i, 1);
			}
			return this;
		}
	}
}
