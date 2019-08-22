export class Profile {
  private id: Number;
  private loginId: string;
  private password: string;
  private profile: string;
  private language: string;

  constructor(
    id: number,
    loginId: string,
    password: string,
    profile: string,
    language: string,
  ){
    this.loginId = loginId;
    this.password = password;
    this.profile = profile;
    this.language = language;
   }
}
