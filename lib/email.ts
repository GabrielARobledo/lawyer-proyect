// /lib/email.ts
export const EMAIL = {
  defaultSubject: "Consulta recibida desde la web",
  to: "gaby-2011@hotmail.com.ar",
  from: "gaby-2011@hotmail.com.ar",
};

/**
 * Genera el contenido HTML de un email de contacto
 * @param name Nombre de quien envía la consulta
 * @param email Email de quien envía la consulta
 * @param message Mensaje/consulta
 * @returns htmlContent listo para usar en sendMail
 */
export function buildContactEmailBody(name: string, email: string, message: string) {
  const now = new Date();
  const formattedDate = now.toLocaleString("es-AR", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Consulta:</strong><br/>${message}</p>
    <hr/>
    <p>Enviado el: ${formattedDate}</p>
  `;
}