"use client";

import React from "react";

import { Provider } from "react-redux";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { store } from "@/redux/store/store";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
    </Provider>
  );
};

export default Providers;
