const config = {
  contactFormReceptor:
    process.env.REACT_APP_CONTACT_FORM_RECEPTOR || 'usuario@dominio.com',
  suscribeteUrl:
    process.env.REACT_APP_SUSCRIBETE_URL || 'https://tu.form.com/subscribe',
  apiUrl: process.env.REACT_APP_API_URL || 'http://host:port',
};

export default config;
