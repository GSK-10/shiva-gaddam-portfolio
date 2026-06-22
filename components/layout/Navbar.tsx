import { navigationItems } from "@/content/navigation";

export function Navbar() {
  return (
    <nav aria-label="Primary">
      <ul className="flex gap-4">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

