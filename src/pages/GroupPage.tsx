/** @format */

import { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { observer } from "mobx-react-lite";
import { contactsStore } from "src/stores/contactsStore";
import { groupsStore } from "src/stores/groupsStore";

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>();

  const { contacts } = contactsStore;
  const { groups } = groupsStore;

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
