/** @format */

import { observer } from "mobx-react-lite";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { groupsStore } from "src/stores/groupsStore";

export const GroupListPage = observer(() => {
  const { groups } = groupsStore;

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
