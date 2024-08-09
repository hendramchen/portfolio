import H1 from "@/components/h1";

export const metadata = {
  title: "Contact",
};

interface ContactInfo {
  label: string;
  value: string;
  isLink: boolean;
}

const contacts: ContactInfo[] = [
  {
    label: "Email",
    value: "mchen.putu@gmail.com",
    isLink: false,
  },
  {
    label: "Phone",
    value: "+62 878-6598-2225",
    isLink: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hendramchen ",
    isLink: true,
  },
  {
    label: "Github",
    value: "github.com/hendramchen",
    isLink: true,
  },
];
export default function ContactPage() {
  return (
    <div>
      <H1>Contact</H1>

      {contacts.map((contact, index) => (
        <ContactInfo
          key={index}
          label={contact.label}
          value={contact.value}
          isLink={contact.isLink}
        />
      ))}
    </div>
  );
}

function ContactInfo({ label, value, isLink }: ContactInfo) {
  return (
    <div className="my-5">
      <label htmlFor={label} className="font-bold">
        {label}
      </label>
      {isLink ? (
        <p>
          <a href={`https://${value}`} target="_blank">
            {value}
          </a>
        </p>
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
}
