import { redirect } from "next/navigation";

// The old home page was merged into the Platform page. The Centre of Excellence
// (About) page is now the landing page — anyone opening the site at the root is
// sent there, so no content or inbound links are lost.
export default function Home() {
  redirect("/about");
}
