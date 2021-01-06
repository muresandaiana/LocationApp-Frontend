export interface UserModel {
    id: number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    roles : Set<any>;
    

  constructor(
      id : number,
      firstName:string,
      lastName:string,
      email:string,
      password:string,
    
  );
      
  }
