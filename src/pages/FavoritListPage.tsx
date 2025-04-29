import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { useAppSelector } from "src/hooks/useAppSelector";

export const FavoritListPage = memo(() => {
  const contacts = useAppSelector((state) => state.contact);
  const favsContacts = contacts.filter((contact) => contact.isFav);

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
