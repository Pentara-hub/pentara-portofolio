function Breadcrumb({ title }) {
  return (
    <nav
      className="text-sm text-slate-500 dark:text-slate-400 mb-4"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2">
        <li>
          <a className="hover:text-primary" href="/">
            Home
          </a>
        </li>
        <li>·</li>
        <li>
          <a className="hover:text-primary" href="/#work">
            Work
          </a>
        </li>
        <li>·</li>
        <li className="text-slate-700 dark:text-slate-200 font-medium">
          {title}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
