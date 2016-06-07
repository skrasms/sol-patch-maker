/* public domain
 * vim: set ts=4:
 */

RED.storage = (function() {
	function update() {
		// // TOOD: use setTimeout to limit the rate of changes?
		// if (localStorage) {
			// var nns = RED.nodes.createCompleteNodeSet();
			// localStorage.setItem("audio_library_guitool", JSON.stringify(nns));
			// //console.log("localStorage write");
		// }
	}
	function load() {
        // localStorage.clear();
		if (localStorage) {
			var data = localStorage.getItem("audio_library_guitool");
			//console.log("localStorage read: " + data);
			if (data) RED.nodes.import(data, false);
		}
	}
    function write(data) {
        localStorage.setItem("audio_library_guitool", data);
    }
	return {
		update: update,
		load: load,
        write: write
	}
})();
