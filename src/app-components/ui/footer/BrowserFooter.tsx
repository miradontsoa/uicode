// Page footer

import FooterContent from "./FooterContent";

export default function BrowserFooter() {
  return (
    <footer className="footer-page text-sm mt-8 mb-8">
      <hr className="opacity-30" />
      <FooterContent withByMe={false} />
    </footer>
  );
}
