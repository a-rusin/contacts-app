/** @format */

import { observer } from "mobx-react-lite";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { contactsStore } from "src/stores/contactsStore";

export const FavoritListPage = observer(() => {
  const { contacts } = contactsStore;

  const favsContacts = contacts
    ? contacts.filter((contact) => contact.isFav)
    : [];

  return (
    <Row xxl={4} className="g-4">
      {favsContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
