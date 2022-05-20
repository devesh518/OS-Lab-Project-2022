function getBotResponse(input) {
	//rock paper scissors
	a = input.toLowerCase();
	if (a == "concurrency") {
		// return "paper";
		return (window.location = "concurrency_info.html");
	} else if (a == "deadlock") {
		return (window.location = "deadlock_info.html");
	} else if (a == "peterson") {
		return (window.location = "peterson_algo.html");
	} else if (a == "producer") {
		return (window.location = "producer_consumer.html");
	} else if (a == "test") {
		return (window.location = "tsl.html");
	} else if (a == "banker") {
		return (window.location = "bankers_algo.html");
	}
}
