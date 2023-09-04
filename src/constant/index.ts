import { ColumnsType } from "antd/es/table";

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    subscrition: string;
    employment: string;
  }


 export const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Subscrition",
      dataIndex: "subscrition",
    },
    {
      title: "Employment",
      dataIndex: "employment",
    },
  ];

export const data: DataType[] = [
    {
        key: 1,
        name: "John Brown",
        age: 32,
        subscrition: "Subscribed",
        employment: "Employed",
      },
      {
        key: 2,
        name: "Jim Green",
        age: 42,
        subscrition: "Not Subscribed",
        employment: "Unemployed",
      },
      {
        key: 3,
        name: "Joe Black",
        age: 32,
        subscrition: "Subscribed",
        employment: "Employed",
      },
      {
        key: 4,
        name: "John Brown",
        age: 32,
        subscrition: "Not Subscribed",
        employment: "Employed",
      },
      {
        key: 5,
        name: "Jim Green",
        age: 42,
        subscrition: "Subscribed",
        employment: "Unemployed",
      },
      {
        key: 6,
        name: "Joe Black",
        age: 32,
        subscrition: "Subscribed",
        employment: "Employed",
      },
      {
        key: 7,
        name: "John Brown",
        age: 32,
        subscrition: "Not Subscribed",
        employment: "Employed",
      },
      {
        key: 8,
        name: "Jim Green",
        age: 42,
        subscrition: "Subscribed",
        employment: "Unemployed",
      },
      {
        key: 9,
        name: "Joe Black",
        age: 32,
        subscrition: "Subscribed",
        employment: "Employed",
      },
      {
        key: 10,
        name: "John Brown",
        age: 32,
        subscrition: "Other",
        employment: "Employed",
      },
      {
        key: 11,
        name: "Jim Green",
        age: 42,
        subscrition: "Other",
        employment: "Unemployed",
      },
      {
        key: 12,
        name: "Joe Black",
        age: 32,
        subscrition: "Other",
        employment: "Employed",
      },
      {
        key: 13,
        name: "John Brown",
        age: 32,
        subscrition: "Subscribed",
        employment: "Employed",
      },
      {
        key: 14,
        name: "Jim Green",
        age: 42,
        subscrition: "Not Subscribed",
        employment: "Unemployed",
      },
      {
        key: 15,
        name: "Joe Black",
        age: 32,
        subscrition: "Other",
        employment: "Employed",
      },
      {
        key: 16,
        name: "John Brown",
        age: 32,
        subscrition: "Subscribed",
        employment: "Employed",
      },
      {
        key: 17,
        name: "Jim Green",
        age: 42,
        subscrition: "Subscribed",
        employment: "Unemployed",
      },
      {
        key: 18,
        name: "Joe Black",
        age: 32,
        subscrition: "Not Subscribed",
        employment: "Employed",
      },
      {
        key: 19,
        name: "John Brown",
        age: 32,
        subscrition: "Other",
        employment: "Employed",
      },
      {
        key: 20,
        name: "Jim Green",
        age: 42,
        subscrition: "Other",
        employment: "Unemployed",
      },
      {
        key: 21,
        name: "Joe Black",
        age: 32,
        subscrition: "Other",
        employment: "Employed",
      },
      {
        key: 22,
        name: "John Brown",
        age: 32,
        subscrition: "Subscribed",
        employment: "Employed",
      },
      {
        key: 23,
        name: "Jim Green",
        age: 42,
        subscrition: "Subscribed",
        employment: "Unemployed",
      },
      {
        key: 24,
        name: "Joe Black",
        age: 32,
        subscrition: "Not Subscribed",
        employment: "Employed",
      },
      {
        key: 25,
        name: "John Brown",
        age: 32,
        subscrition: "Other",
        employment: "Employed",
      },
]

export const SelectData = [
    { value: "Subscried", label: "Subscried" },
    { value: "Not Subscried", label: "Not Subscried" },
    { value: "Other", label: "Other" },
  ]