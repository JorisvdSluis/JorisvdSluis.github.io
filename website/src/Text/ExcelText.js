import React from "react";
import { Header } from "semantic-ui-react";

class ExcelText extends React.Component {
  render() {
    return (
      <>
        <Header as="h3" style={{ fontSize: "2em" }}>
          AutomatedExcelModifier
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          AutomatedExcelModifier, is a project to create a solution for Cevede
          and her products.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          The products of Cevede are delivered as Excel file and not ordered.
          Each product type has an excel file and there are 90+ product types.{" "}
        </p>
        <p style={{ fontSize: "1.33em" }}>
          Because of the time it would take to convert the files to csv(to use
          them in our webshop). I created an python script to reformat Excel to
          csv.
        </p>
        <p style={{ fontSize: "1.33em", marginBottom: "11em" }}>
          After this I still had to reorder products and change various columns,
          so I further enhanced the python script to use userinput to change
          columns.{" "}
        </p>
      </>
    );
  }
}

export default ExcelText;
