function KeybdInput() {
	var _func = null;
	var _state = 0;
	var _data = null;
	var _acceptable = {};
	
	function clear() {
		_func = null;
		_state = 0;
		_data = null;
		_acceptable = { key: [], re: [] };
	}
	
	this.start = function(f, d) {
		clear();
		_func = f;
		if (d !== undefined) {
			_data = d;
		}
	};
	
	this.stop = function() {
		clear();
	};
	
	this.isActive = function() {
		return (_func !== null);
	};
	
	this.process = function(obj, key) {
		if (!this.isActive()) {
			return;
		}
		if (!isAcceptable(key)) {
			console.log('key ' + key + ' not accepted');
			return;
		}
		if (!_func.call(obj, key)) {
			this.stop();
		}
	};
	
	function isAcceptable(key) {
		var key_set = _acceptable.key;
		var re_set = _acceptable.re;
		if (!key_set.length && !re_set.length) {
			return true;
		}
		if (key_set.length > 0) {
			if (key_set.includes(key)) {
				return true;
			}
		}
		if (re_set.length > 0) {
			for (let i = 0, len = re_set.length; i < len; i++) {
				if (key.match(re_set[i])) {
					return true;
				}
			}
		}
		return false;
	}
	
	this.setFilter = function(e) {
		var key_set = _acceptable.key;
		var re_set = _acceptable.re;
		if (typeof e === 'string') {
			if (e.length === 1) {
				if (!key_set.includes(e)) {
					key_set.push(e);
				}
			} else {
				let arr = e.split('');
				this.setFilter(arr);
			}
		} else if (Array.isArray(e)) {
			let tmp = key_set.concat(e);
			let set = new Set(tmp);
			_acceptable.key = Array.from(set);	// remove duplicate elements
		} else if (typeof e === 'object') { // regexp
			re_set.push(e);
		}
	};
	
	this.clearFilter = function() {
		_acceptable = { key: [], re: [] };
	};
	
	Object.defineProperty(
		this,
		'state', 
		{
			get: function() { return _state; },
			set: function(v) { _state = v; }
		}
	);
	Object.defineProperty(
		this,
		'data', 
		{
			get: function() { return _data; },
			set: function(d) { _data = d; }
		}
	);
}