export interface IState {
  name: string;
  code: string;
}

export interface ICountry {
  name: string;
  code: string;
  states: IState[];
}
