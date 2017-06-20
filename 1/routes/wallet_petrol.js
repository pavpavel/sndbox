

/*
 * POST /wallet-petrol
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.ReportCompletionRequest = function (req, res) {
	
	res.type('xml');


	var completionResultCode = req.xmlDoc.get("//*[local-name()='completionResultCode']").text();

	if (completionResultCode != "COMPLETE" && completionResultCode != "FAIL" && completionResultCode != "TIMEOUT") {
	    res.status(400);
		res.render('wallet_petrol_ReportCompletionRequest_errorValue');
		return;
	}

	if (completionResultCode == "COMPLETE") {
	    res.status(200);
		res.render('wallet_petrol_ReportCompletionRequest');
		return;
	}

    res.status(400);
    res.render('unknown');
	return;
	// set response body and send
	// res.type('xml');
	// res.render('wallet_petrol_ReportCompletionRequest');
};