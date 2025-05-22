/** @format */

import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useGetGroupsQuery } from "src/store/groups";

export const GroupListPage = memo(() => {
  const { data: groups } = useGetGroupsQuery();

  return (
    <Row xxl={4}>
      {groups &&
        groups.map((groupContacts) => (
          <Col key={groupContacts.id}>
            <GroupContactsCard groupContacts={groupContacts} withLink />
          </Col>
        ))}
    </Row>
  );
});
