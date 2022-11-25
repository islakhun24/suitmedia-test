export interface ResponseModels {
  data: DataModels[];
  links: LinksModels;
  meta: MetaModels;
}

export interface MetaModels {
  current_page: number;
  from: number;
  last_page: number;
  links: LinkModels[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface LinkModels {
  url?: string;
  label: string;
  active: boolean;
}

export interface LinksModels {
  first: string;
  last: string;
  prev?: any;
  next: string;
}

export interface DataModels {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at: string;
  deleted_at?: any;
  created_at: string;
  updated_at: string;
}
