import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import Layout from 'components/Layout';
import Sidebar from 'components/SidebarAdmin';
import PageWrapper from 'components/PageWrapper';
import SideNav from 'components/SideNav';
//import { NoticeContext } from '../contexts/notice-context';

const NoticeLayout = ({ selected, children }) => {
  //const { notices } = useContext(NoticeContext);
  const  notices  ="hola";
  return (
    <Layout>
      <Sidebar>
        <SideNav notices={notices} selected={selected} />
      </Sidebar>
      <PageWrapper>{children}</PageWrapper>
    </Layout>
  );
};

NoticeLayout.propTypes = {
  selected: PropTypes.string,
  children: PropTypes.node.isRequired,
};

NoticeLayout.defaultProps = {
  selected: '',
};

export default NoticeLayout;
