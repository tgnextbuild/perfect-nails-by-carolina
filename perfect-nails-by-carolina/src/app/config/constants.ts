const dev = {
    COMPANY: {
      NAME: "[DEV] Perfect Nails By Calorina",
      PHONE: "+1 (475) 544-6176",
      EMAIL: "perfectnailsbycarolina@gmail.com",
      URL: "www.perfectnailsbycarolina.com",
      FACEBOOK: 'https://www.facebook.com/',
      FRESHA: "https://www.fresha.com",
      ADDRESS: "60 Connecticut Ave, Norwalk, CT 06850",
      HOURS: "Mon-Sat: 10:00AM - 8:00PM"
    }
  };
  
  const prod = {
    COMPANY: {
      NAME: "Perfect Nails By Calorina",
      PHONE: "+1 (475) 544-6176",
      EMAIL: "perfectnailsbycarolina@gmail.com",
      URL: "www.perfectnailsbycarolina.com",
      FACEBOOK: 'https://www.facebook.com/',
      FRESHA: "https://www.fresha.com",
      ADDRESS: "60 Connecticut Ave, Norwalk, CT 06850",
      HOURS: "Mon-Sat: 10:00AM - 8:00PM"
    }
  };
  
  export const config = process.env.NODE_ENV === 'development' ? dev : prod;