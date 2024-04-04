const getEmailDomain = (email: string ): string => {
  const domainRegex = /(?<=@)[^.]+(?=\.)/;
  const [emailDomain] = email.match(domainRegex);

  return emailDomain;
};

export default getEmailDomain;