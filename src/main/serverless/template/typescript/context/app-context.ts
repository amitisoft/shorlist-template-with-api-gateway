import {CandidateServiceImpl} from "../service/candidate-service";
import {CandidateFacade} from "../facade/candidate-facade";

export const AppProviders = [
    CandidateServiceImpl,
    CandidateFacade
];
