export class AuthEntity {
  public name: string;
  public email: string;

  public construtor(data: Partial<AuthEntity>) {
    this.name = data?.name as string;
    this.email = data?.email as string;
  }
}
