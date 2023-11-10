import {ActionType} from "../action-types";

interface SearchNPMPackageAction {
  type: ActionType.SEARCH_NPM_PACKAGES;
}

interface SearchNPMPackageSuccessAction {
  type: ActionType.SEARCH_NPM_PACKAGES_SUCCESS;
  payload: string[];
}

interface SearchNPMPackageErrorAction {
  type: ActionType.SEARCH_NPM_PACKAGES_ERROR;
  payload: string;
}

export type Action = SearchNPMPackageAction | SearchNPMPackageSuccessAction | SearchNPMPackageErrorAction;