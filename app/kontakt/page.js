import { client } from "@/lib/contentful/client";
import PageHeader from "../components/global-components/page-header";
import ContactForm from "../components/kontakt-page/contact-form";
import ContactSection from "../components/kontakt-page/contact-section";
import Head from "next/head";

async function getContentfulContactPage() {
  const resContactPage = await client.getEntries({
    content_type: "contatct",
  });

  const contactPage = resContactPage.items[0];

  return contactPage;
}

export default async function Kontakt() {
  const contactContent = await getContentfulContactPage();
  return (
    <>
      <Head>
        <title>Kontakt: Green Leaf Power</title>
        <meta
          name="description"
          content="Green Leaf Power: kontakt. Fotowoltaika, magazyny energii, systemy smart home, serwisy fotowoltaiki dla klientów biznesowych oraz indywidualnych."
        />
      </Head>
      <PageHeader>Kontakt</PageHeader>
      <ContactSection
        title={contactContent.fields.title}
        address={contactContent.fields.address}
        phoneNumber={contactContent.fields.phone}
        email={contactContent.fields.email}
        content={contactContent.fields.text}
      />
      <ContactForm />
    </>
  );
}
