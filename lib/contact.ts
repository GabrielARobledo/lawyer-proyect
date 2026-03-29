export class ContactMessage {
  name: string;
  email: string;
  message: string;

  constructor(name: string, email: string, message: string) {
    this.name = name.trim();
    this.email = email.trim();
    this.message = message.trim();
  }

  validate() {
    const errors: { [key: string]: string } = {};

    if (!this.name) errors.name = "El nombre es requerido";
    if (!this.email) errors.email = "El email es requerido";
    else if (!/\S+@\S+\.\S+/.test(this.email)) errors.email = "Email inválido";
    if (!this.message) errors.message = "El mensaje es requerido";

    return errors;
  }
}
