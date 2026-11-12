export interface CompanyInfo {
  name: string;
  legalOwner: string;
  cif: string;
  address: string;
  postalCode: string;
  town: string;
  province: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  whatsappUrl: (message?: string) => string;
  yearsOfExperience: number;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  mission: string;
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  pressMentions: {
    media: string;
    headline: string;
    url: string;
    date: string;
  }[];
}

export const COMPANY: CompanyInfo = {
  name: 'Querencia Rural',
  legalOwner: 'Marcos Octavio Fernández Vergara',
  cif: '36148292C',
  address: 'Caino Novo nº 2, 2º H, Bertamiráns',
  postalCode: '15220',
  town: 'Ames',
  province: 'A Coruña, Galicia',
  phone: '+34621042607',
  phoneFormatted: '+34 621 042 607',
  email: 'querenciaruralgerencia@gmail.com',
  whatsappUrl: (message?: string) => {
    const text = message 
      ? encodeURIComponent(message)
      : encodeURIComponent('Hola, me pongo en contacto desde querenciarural.com para solicitar información sobre sus propiedades.');
    return `https://wa.me/34621042607?text=${text}`;
  },
  yearsOfExperience: 15,
  tagline: 'Nos apasiona el mundo rural y trabajamos para que cada cliente encuentre su lugar perfecto en él.',
  heroHeadline: 'Encuentra tu lugar en Galicia',
  heroSubtitle: 'Propiedades únicas, pazos históricos y oportunidades rurales seleccionadas para quienes buscan algo extraordinario.',
  mission: 'En Querencia Rural, nuestra historia se remonta a una experiencia consolidada de 15 años dedicados a la compra y venta de propiedades rurales. A lo largo de estos años, hemos acumulado un profundo conocimiento del sector, permitiéndonos comprender y manejar con destreza todos los aspectos del proceso de compraventa, desde la búsqueda inicial hasta la formalización ante notario, asegurando siempre las máximas garantías jurídicas.',
  services: [
    {
      title: '15 Años de Especialización Rural',
      description: 'Conocimiento exhaustivo del territorio gallego, tipologías arquitectónicas vernáculas, normativas de suelo rústico y patrimonio histórico.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Búsqueda Patrimonial a Medida',
      description: 'Identificamos las necesidades específicas de cada comprador y seleccionamos en exclusiva las propiedades que mejor se adaptan a su visión e inversión.',
      icon: 'Compass'
    },
    {
      title: 'Seguridad Jurídica y Notarial',
      description: 'Gestión rigurosa de catastro, registro de la propiedad, deslindes, herencias e indivisos, garantizando una transmisión con plenas garantías legales.',
      icon: 'FileText'
    },
    {
      title: 'Asesoramiento en Financiación',
      description: 'Colaboramos en la búsqueda de vías de financiación idóneas y subvenciones aplicables a la rehabilitación y proyectos rurales.',
      icon: 'Coins'
    },
    {
      title: 'Red de Arquitectos y Restauradores',
      description: 'Conectamos a nuestros clientes con los mejores estudios de arquitectura y constructoras especializadas en rehabilitación histórica en piedra de granito.',
      icon: 'Hammer'
    },
    {
      title: 'Discreción y Operaciones Off-Market',
      description: 'Comercialización confidencial para activos patrimoniales singulares, protegiendo la privacidad de propietarios e inversores internacionales.',
      icon: 'KeyRound'
    }
  ],
  pressMentions: [
    {
      media: 'G24 Televisión de Galicia',
      headline: 'Mercado internacional de pazos en www.querenciarural.com: Inversores extranjeros se interesan por la compra de pazos en Galicia',
      url: 'https://www.g24.gal/-/inversores-estranxeiros-interesanse-pola-compra-de-pazos-en-galicia',
      date: 'Cobertura televisiva'
    },
    {
      media: 'El Progreso de Lugo',
      headline: 'Se vende por 475.000 euros un icónico pazo del siglo XVI en Vilalba gestionado por Querencia Rural',
      url: 'https://www.elprogreso.es/articulo/a-chaira/vende-590000-euros-iconico-pazo-siglo-xvi-vilalba/202504251019431870525.html',
      date: 'Edición Lugo'
    },
    {
      media: 'La Voz de Galicia',
      headline: 'Venta de gran propiedad rústica y fincas de grandes extensiones en el interior de Galicia',
      url: 'https://www.lavozdegalicia.es/noticia/lugo/2025/06/25/venta-600000-euros-finca-31-hectareas-rozas/00031750853571537442547.htm',
      date: 'Edición General'
    }
  ]
};
