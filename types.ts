
export interface Analysis {
  title: string;
  companyName: string;
  summary: string;
  keySections: {
    title: string;
    content: string;
  }[];
  competitorAnalysis: {
    name: string;
    description: string;
  }[];
  uiUxCritique: {
    positive: string[];
    suggestions: string[];
  };
  brandIdentity: {
    logoDescription: string;
    colorPalette: {
      hex: string;
      name: string;
    }[];
  };
}
