import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { FC, useEffect, useState } from "react";
import { ProductsRes } from "../../interface/loginData";
import { productsApi } from "../api/api";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export const ProductList: FC = () => {
  const [productData, setProductData] = useState<ProductsRes>();
  const columnsTitle = [
    { field: "id" },
    { field: "title" },
    { field: "price" },
  ];

  useEffect(() => {
    const fetchProductData = async () => {
      const { data } = await productsApi();
      console.log(data, Object.keys(data.products[0]));
      setProductData(data);
    };
    fetchProductData();
  }, []);

  if (productData == null) return <>loading</>;

  return (
    <>
      <Grid
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ height: 400, width: 600 }}>
          <AgGridReact
            rowData={productData?.products}
            columnDefs={columnsTitle}
          />
        </div>
      </Grid>
    </>
  );
};
