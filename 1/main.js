Sandbox.define('/getProducts/{sessionid}', 'POST', function(req, res) {
    
    
    res.type('application/json');
    res.status(200);
    
    if (req.body.productId === "CZ999000010400") {
        res.status(400);
    } 
    res.render('getProducts/gp_response_' + req.body.productId );

    
});


Sandbox.define('/prepayProducts/{sessionid}', 'POST', function(req, res) {
    
    res.type('application/json');
    res.status(200);
    
    if (req.body.loyaltyId ===  ("0003" || 
                                 "0005" ||
                                 "0006" ||
                                 "0007" ||
                                 "0008" )){
        res.status(400);
    }
    
   
    res.render('prepayProducts/pp_response_' + req.body.loyaltyId );
});


Sandbox.define('/cancelTransaction/{sessionid}', 'GET', function(req, res) {
    res.type('application/json');
    res.status(200);

    res.render('cancelTransaction/ct_response_' + req.query._r);
});





var wallet_petrol = require("./routes/wallet_petrol.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */

Sandbox.soap("/wallet-petrol", "urn:aevi:com:wallet:petrol#reportCompletion", "reportCompletionRequest", wallet_petrol.ReportCompletionRequest);

/**
 * My API Sandbox
 * 
 */


Sandbox.define('/finalizeTransaction/{SessionID}','POST', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({});
})