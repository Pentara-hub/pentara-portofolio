import { Link } from "react-router-dom";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  neon: "btn-neon",
  brand: "btn-brand",
  outline: "btn-secondary",
  accent: "btn-brand",
  white: "btn-primary",
  ghost: "text-muted hover:text-fg px-3 py-2 rounded-lg hover:bg-white/5 transition-colors",
};

const sizes = { sm: "!text-xs !px-4 !py-2", md: "", lg: "!text-base !px-8 !py-3.5" };

export default function Button({ children, variant = "primary", size = "md", href, to, className = "", disabled, type = "button", ...props }) {
  const cls = `${variants[variant] || variants.primary} ${sizes[size]} ${className} disabled:opacity-40 disabled:pointer-events-none`;
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button type={type} className={cls} disabled={disabled} {...props}>{children}</button>;
}
