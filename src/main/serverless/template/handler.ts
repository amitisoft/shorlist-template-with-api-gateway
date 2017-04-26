import 'reflect-metadata';
import { GetCandidateHandler } from './typescript/web/get-candidate-handler';
import { AppProviders } from './typescript/context/app-context';
import { ExecutionContextImpl } from "./typescript/context/execution-context-impl";

// exports.getAllCandidatesFunction = ExecutionContextImpl.createHttpHandler(AppProviders, GetCandidateHandler.getAllCandidates);
exports.findCandiateByIdFunction = ExecutionContextImpl.createHttpHandler(AppProviders, GetCandidateHandler.findCandidateById);