// Social media links data with unique IDs, icon classes, and URLs
const links = [
  { id: 1, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/', label: 'Facebook' },
  { id: 2, icon: 'uil uil-instagram', url: 'https://www.instagram.com', label: 'Instagram' },
  { id: 3, icon: 'uil uil-linkedin', url: 'https://www.linkedin.com', label: 'LinkedIn' },
  { id: 4, icon: 'uil uil-twitter', url: 'https://www.twitter.com', label: 'Twitter' },
  { id: 5, icon: 'uil uil-youtube', url: 'https://www.youtube.com', label: 'YouTube' },
];

const SocialLinks = ({ className = 'nav social mt-4' }) => {
  return (
    // Navigation landmark with optional styling classes
    <nav className={className} aria-label="Social media links">
      {links.map(({ id, icon, url, label }) => (
        // External link opening in new tab with security and accessibility attributes
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label} // Improves screen reader context
          className="text-white rounded"
        >
          {/* Icon element with font-size styling */}
          <i className={`${icon} fs-24 text-white`} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
