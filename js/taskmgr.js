function TaskManager() {
	var _timer = 0;
	var _task_queue = [];

	this.runTimer = function() {
		if (_timer > 0) {
			clearTimeout(_timer);
		}
		if (_task_queue.length > 0) {
			let o = _task_queue[0];
			_timer = setTimeout(scheduler, o.delay);
		}
	};

	function scheduler() {
		var o = _task_queue[0];
		if (!o.func(o)) {
			_task_queue.shift();
		}
		if (_task_queue.length > 0) {
			o = _task_queue[0];
			_timer = setTimeout(scheduler, o.delay);
		}
	}
	
	this.add = function(o) {
		_task_queue.push(o);
	};
}