export class AuthEntity {
  public name: string;
  public email: string;

  //Partial<T> = util do TS que torna todas as props T opcionais
  public constructor(data: Partial<AuthEntity>) {
    this.name = data?.name as string;
    this.email = data?.email as string;
  }
}
