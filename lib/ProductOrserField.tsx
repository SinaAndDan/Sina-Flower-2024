// Replace the import with dummy data
// import { ProductOrderField } from "./saleor/generated/graphql";

export enum ProductOrderField {
  NAME = "NAME",
  PRICE = "PRICE",
  DATE = "DATE",
  // Add more fields as necessary for your application
}

export type SortFilterItem = {
  title: string;
  value: ProductOrderField;
};
