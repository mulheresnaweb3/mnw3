'use server'

import nodemailer from 'nodemailer'

type EmailResponse = {
  success: boolean
  message: string
}

export async function sendEmail(formData: FormData): Promise<EmailResponse> {
  const name = String(formData.get('name') ?? '')
  const email = String(formData.get('email') ?? '')
  const phone = String(formData.get('phone') ?? '')
  const city = String(formData.get('city') ?? '')

  if (!name || !email || !phone || !city) {
    return {
      success: false,
      message: 'Por favor, preencha todos os campos obrigatórios.'
    }
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
    SMTP_TO
  } = process.env

  // Se as variáveis de ambiente não estiverem configuradas, apenas loga os dados.
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !SMTP_TO) {
    console.log('Formulário recebido (modo desenvolvimento, sem envio de e-mail):', {
      name,
      email,
      phone,
      city
    })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: 'Cadastro recebido! Em breve entraremos em contato pelo e-mail informado.'
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD
      }
    })

    await transporter.sendMail({
      from: `"MulheresNaWeb3" <${SMTP_USER}>`,
      to: SMTP_TO,
      subject: 'Novo cadastro - Junte-se a nós',
      text: `
Nova inscrição no formulário "Junte-se a nós":

Nome: ${name}
E-mail: ${email}
Telefone: ${phone}
Cidade/Estado: ${city}
      `.trim()
    })

    return {
      success: true,
      message: 'Cadastro enviado com sucesso! Em breve entraremos em contato.'
    }
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)

    return {
      success: false,
      message: 'Ocorreu um erro ao enviar seu cadastro. Tente novamente mais tarde.'
    }
  }
}
