export const formatPrice = (value: number) => {
  return `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const dateFormat = "MM/DD/YYYY HH:mm";
