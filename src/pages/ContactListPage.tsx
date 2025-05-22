/** @format */

import React, { memo, useState } from "react";

import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useGetContactsQuery } from "src/store/contacts";
import { useGetGroupsQuery } from "src/store/groups";

export const ContactListPage = memo(() => {
  const [formValue, setFormValue] = useState<Partial<FilterFormValues>>({});

  const { data: contacts } = useGetContactsQuery();

  const { data: groups } = useGetGroupsQuery();

  const filterContacts = () => {
    let filteredContacts = contacts ? [...contacts] : [];

    if (formValue.name) {
      const fvName = formValue.name.toLowerCase();
      filteredContacts = filteredContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      );
    }

    if (formValue.groupId) {
      const groupContacts =
        groups && groups.find(({ id }) => id === formValue.groupId);

      if (groupContacts) {
        filteredContacts = filteredContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        );
      }
    }

    return filteredContacts;
  };

  const filteredContacts = filterContacts();

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    setFormValue(fv);
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
