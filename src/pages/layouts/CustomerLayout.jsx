import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu, theme, ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import viVN from 'antd/locale/vi_VN';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
const { Header, Content, Footer } = Layout;

dayjs.locale('vi');

const CustomerLayout = () => {
  const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [locale, setLocal] = useState(viVN);
  const changeLocale = (e) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('vi');
    } else {
      dayjs.locale('en');
    }
  };

  return (
    <ConfigProvider locale={locale}>
      <Layout className="w-full min-h-dvh">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        <Content
          style={{
            padding: '0 48px',
          }}
        >
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
            }}
            className="rounded"
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Jupiter Store ©2025 Created by T&T
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default CustomerLayout;
