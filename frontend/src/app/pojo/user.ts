export class User {
  constructor(
    public id: number,
    public fisrtName: string,
    public lastName: string,
    public birthday: Date,
    public userType: string,
    public gender: string,
    public email: string,
    public password: string,
    public contactNumber: number,
    public image: string,
    public propic: string
  ) {}
}
