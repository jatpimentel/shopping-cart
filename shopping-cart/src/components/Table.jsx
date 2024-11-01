import React from "react";

const TableContainer = ({ children, props }) => {
  return <table>{children}</table>;
};

const THead = ({ children }) => {
  return <thead>{children}</thead>;
};

const TFoot = ({ children }) => {
  return <tfoot>{children}</tfoot>;
};

const TBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const Row = ({ children }) => {
  return <tr className="text-red">{children}</tr>;
};

const Column = ({ children }) => {
  return <td>{children}</td>;
};

const ColumnHeader = ({ children }) => {
  return <th>{children}</th>;
};

const Table = {
  TableContainer,
  THead,
  TBody,
  TFoot,
  Row,
  Column,
  ColumnHeader,
};

export default Table;
