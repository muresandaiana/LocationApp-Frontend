import { UserModel } from './UserModel';

export interface LocationModel{
    id : number;
    latitude : number;
    longitude :  number;
    user : UserModel;
}