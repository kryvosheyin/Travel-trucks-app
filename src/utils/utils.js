export const getFilteredEquipment = ({
  AC,
  transmission,
  engine,
  bathroom,
  kitchen,
  radio,
  TV,
  gas,
  microwave,
  refrigerator,
  water,
}) => {
  return [
    {
      icon: "icon-automatic",
      label: "Automatic",
      available: transmission === "automatic",
    },
    { icon: "icon-ac", label: "AC", available: AC },
    { icon: "icon-fuel", label: engine, available: engine },
    { icon: "icon-kitchen", label: "Kitchen", available: kitchen },
    { icon: "icon-shower", label: "Bathroom", available: bathroom },
    { icon: "icon-radio", label: "Radio", available: radio },
    { icon: "icon-tv", label: "TV", available: TV },
    { icon: "icon-gas", label: "Gas", available: gas },
    { icon: "icon-microwave", label: "Microwave", available: microwave },
    { icon: "icon-fridge", label: "Refrigerator", available: refrigerator },
    { icon: "icon-water", label: "Water", available: water },
  ].filter((item) => item.available);
};

export const formatString = (str) => {
  return str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
};

export const addSpaceToUnit = (str) => {
  return str.replace(/(\d+\.?\d*)([a-zA-Z]+)/, "$1 $2");
};

export const scrollToTheTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
