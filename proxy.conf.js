const PROXY_CONF = [
    {
      context: ['/auth'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/produtos'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/categorias'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/cidades'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/clientes'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/fornecedores'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/marcas'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/notificacaos'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/usuario'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/usuariologado'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/vendas'],
      target: 'http://localhost:8082/',
      secure: false,
      logLevel: 'debug'
    }
  ];

  module.exports = PROXY_CONF;
