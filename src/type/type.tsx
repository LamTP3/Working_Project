// Định nghĩa kiểu type cho toàn bộ Project sử dụng các kiểu type đã định nghĩa
export interface Project {
  id: string;
  basic_information: BasicInformation;
  project_detail: ProjectDetail;
  links: Links;
  token_information: TokenInformation;
  capital: Capital;
  public_token_sale: PublicTokenSale;
  status_of_partnerships: StatusOfPartnerships;
  stautsId: number;
}

// Định nghĩa kiểu type cho basic_information
export type BasicInformation = {
  project_name: string;
  contact_name: string;
  contact_telegram_handle: string;
  email: string;
  project_logo: string;
  project_cover: string;
};

// Định nghĩa kiểu type cho project_detail
export type ProjectDetail = {
  start_date: string;
  tags: Array<{
    tag_name: string;
    tag_value: string;
  }>;
  project_description: string;
  ecosystem: string;
  current_community: string;
  size_existing_user: string;
};

// Định nghĩa kiểu type cho links
export type Links = {
  project_website: string;
  project_telegram: string;
  project_twitter: string;
  project_medium: string;
  project_other_link: string;
};

// Định nghĩa kiểu type cho token_information
export type TokenInformation = {
  token_name: string;
  token_symbol: string;
  token_contract_address: string;
  tokennomics: Record<string, any>;
};

// Định nghĩa kiểu type cho capital
export type Capital = {
  rounds: Array<{
    roundName: string;
    startDate: string;
    endDate: string;
  }>;
};

// Định nghĩa kiểu type cho public_token_sale
export type PublicTokenSale = {
  total_amount: number;
  amount_through_Galaxy: number;
  flexible_amount: boolean;
  planned_FDV: number;
  other_information: string;
  sale: string;
};

// Định nghĩa kiểu type cho status_of_partnerships
export type StatusOfPartnerships = Array<{
  label: string;
  value: boolean;
}>;
