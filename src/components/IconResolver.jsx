import * as LucideIcons from 'lucide-react';
import { FaFacebook, FaInstagram, FaXTwitter, FaGlobe } from 'react-icons/fa6';

const BrandIcons = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  Twitter: FaXTwitter,
  Globe: FaGlobe
};

export const IconResolver = ({ name, ...props }) => {
  if (BrandIcons[name]) {
    const BrandIcon = BrandIcons[name];
    return <BrandIcon {...props} />;
  }

  const Icon = LucideIcons[name];
  if (!Icon) return <LucideIcons.HelpCircle {...props} />;
  return <Icon {...props} />;
};
