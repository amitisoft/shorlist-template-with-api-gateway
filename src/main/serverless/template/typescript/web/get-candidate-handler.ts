import { CandidateFacade } from '../facade/candidate-facade';
import { Injector } from '@angular/core';
import { HttpContextImpl } from "../http/http-context-impl";

export class GetCandidateHandler {

    static getAllCandidates (httpContext:HttpContextImpl,injector:Injector) : void {

        injector.get(CandidateFacade).getAll()
            .subscribe(result => {
                httpContext.ok(200, result);
            },  err => {
                httpContext.fail(err, 500);
        });
    }


    static findCandidateById (httpContext:HttpContextImpl,injector:Injector) : void {

        let pathParameters = httpContext.getPathParameters();
        console.log(JSON.stringify(pathParameters));

        let candidateId = pathParameters.id;

        injector.get(CandidateFacade).findbyId(candidateId)
            .subscribe(result => {
                httpContext.ok(200, result);
            },  err => {
                httpContext.fail(err, 500);
            });

        // injector.get(CandidateFacade).findbyId(candidateId)
        //     .subscribe(result => {
        //         injector.get(CandidateFacade).findbyEmail(candidateId)
        //             .subscribe(result => {
        //                 httpContext.ok(200, result);
        //             });
        //     },  err => {
        //         httpContext.fail(err, 500);
        //     });
    }

}