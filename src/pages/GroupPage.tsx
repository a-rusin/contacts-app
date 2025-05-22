/** @format */

import { memo, useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useGetContactsQuery } from "src/store/contacts";
import { useGetGroupsQuery } from "src/store/groups";

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>();

  const { data: contacts } = useGetContactsQuery();

  const { data: groups } = useGetGroupsQuery();

  const groupContacts = groups && groups.find(({ id }) => id === groupId);

  const filterContactsByGroup = () => {
    let filteredContacts = contacts ? [...contacts] : [];

    if (groupContacts) {
      filteredContacts = contacts
        ? contacts.filter(({ id }) => groupContacts.contactIds.includes(id))
        : [];
    }

    return filteredContacts;
  };

  const filteredContactsByGroup = useMemo(
    () => filterContactsByGroup(),
    [groupId]
  );

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {filteredContactsByGroup.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});
