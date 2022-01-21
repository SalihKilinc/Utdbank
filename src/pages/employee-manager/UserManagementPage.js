import React from "react";
import { Container } from "react-bootstrap-v5";
import PageHeader from "../../components/common/PageHeader";
import UserManagement from "../../components/employee-manager/UserManagement";

const UserManagementPage = () => {
  return (
    <div>
      <PageHeader />
      <Container>
        {" "}
        <UserManagement />
      </Container>
    </div>
  );
};

export default UserManagementPage;
