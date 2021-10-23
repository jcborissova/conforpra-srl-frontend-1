const config = {
  contactFormReceptor:
    process.env.REACT_APP_CONTACT_FORM_RECEPTOR || 'usuario@dominio.com',
  suscribeteAPI:
    process.env.REACT_APP_SUSCRIBETE_API || 'https://api/v3/contacts',
  suscribeteAPIKEY: process.env.REACT_APP_SUSCRIBETE_APIKEY || 'APIKEY',
  suscribeteFields:
    process.env.REACT_APP_SUSCRIBETE_FIELDS || 'nombre, apellidos, email',
  apiUrl: process.env.REACT_APP_API_URL || 'http://host:port',
};

export default config;
