module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'lamodeclassique2017@gmail.com',
      defaultReplyTo: 'lamodeclassique2017@gmail.com',
    },
  },
});