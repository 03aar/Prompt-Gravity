export enum CategoryType {
  ROLE = 'Role',
  INDUSTRY = 'Industry',
  OCCASION = 'Occasion',
  USE_CASE = 'Use Case'
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  categoryType: CategoryType;
  categoryValue: string;
  tags: string[];
  gradient: string;
}

export interface FilterState {
  search: string;
  activeCategory: string | 'All';
}