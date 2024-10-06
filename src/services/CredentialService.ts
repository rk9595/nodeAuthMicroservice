import bcrypt from "bcryptjs";
export class CredentialService {
  async comparePassword(userPassword: string, passwordHash: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await bcrypt.compare(userPassword, passwordHash);
  }
}
