import * as LucideIcons from 'lucide-react';

export const IconResolver = ({ name, ...props }) => {
  const Icon = LucideIcons[name];
  if (!Icon) return <LucideIcons.HelpCircle {...props} />;
  return <Icon {...props} />;
};
