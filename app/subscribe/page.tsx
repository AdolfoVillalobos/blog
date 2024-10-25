import NewsletterSubscription from "app/components/newsletter";

export const metadata = {
  title: "Subscribe",
  description: "Subscribe to my newsletter.",
};

export default function Page() {
  return (
    <section>
      <NewsletterSubscription />
    </section>
  );
}
