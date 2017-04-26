import {ReflectiveInjector} from "@angular/core";
import {Callback, Context} from "aws-lambda";
import { HttpHandler, HttpContextImpl, LambdaHandler } from '../http/http-context-impl';

export class ExecutionContextImpl {

    static createHttpHandler(providers:any[],handler:HttpHandler):LambdaHandler {
        return (lambdaEvent:any,lambdaContext:Context,lambdaCallback:Callback) => {
            const httpContext = new HttpContextImpl(lambdaEvent, lambdaCallback);
            try {
                const handlerProviders = [
                    {provide: HttpContextImpl,useValue: httpContext}
                ].concat(providers);
                const injector = ReflectiveInjector.resolveAndCreate(handlerProviders);

                handler(httpContext,injector);

            }catch(e) {
                console.error(e);
                httpContext.fail(e, 500);
            }

        }

    }

}