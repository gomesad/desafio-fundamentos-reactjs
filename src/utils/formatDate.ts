const formatDate = (value: Date): string => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'America/Sao_Paulo',
  };

  return Intl.DateTimeFormat('pt-BR', options).format(new Date(value));
};

export default formatDate;
