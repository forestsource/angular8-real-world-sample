export class Profile {
  public id: number;
  public loginId: string;
  public password: string;
  public profile: string;
  public language: string;
  public isAdmin: boolean;

  constructor(
    id?: number,
    loginId?: string,
    password?: string,
    profile?: string,
    language?: string,
    isAdmin?: boolean,
  ){
    this.loginId = loginId;
    this.password = password;
    this.profile = profile;
    this.language = language;
    this.isAdmin = isAdmin;
   }
}
