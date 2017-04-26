"use strict";
var candidate_facade_1 = require("../facade/candidate-facade");
var GetCandidateHandler = (function () {
    function GetCandidateHandler(facade) {
        var _this = this;
        this.facade = facade;
        this.handler = function (event, context, callback) {
            console.log("calling facade get all candidates");
            _this.facade.getAll().subscribe(function (result) {
                var response = {
                    statusCode: 200,
                    body: result
                };
                console.log("responses:" + response);
                callback(null, response);
            }, function (error) {
                callback(error);
            }, function () {
                console.log("completed loading all candidates");
            });
        };
        console.log("in GetCandidateHandler constructor");
    }
    GetCandidateHandler.getAllCandidates = function (httpContext, injector) {
        injector.get(candidate_facade_1.CandidateFacade).getAll();
        //         .subscribe(result => {
        //             httpContext.ok(200, result);
        //         },  err => {
        //             httpContext.fail(err, 500);
        //         });
    };
    return GetCandidateHandler;
}());
exports.GetCandidateHandler = GetCandidateHandler;
