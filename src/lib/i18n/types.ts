export type TranslationType = {
  hero: {
    title: Array<{
      text: string;
      className: string;
    }>;
    subtitle: string;
    cta: {
      services: string;
      contact: string;
    };
  };
  services: {
    title: string;
    software: ServiceType;
    consulting: ServiceType;
    blockchain: ServiceType;
    vrar: ServiceType;
    mobile: ServiceType;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
};

export type ServiceType = {
  title: string;
  description: string;
  features: string[];
};