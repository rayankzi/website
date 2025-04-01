export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center mx-auto">
      <span className="text-low-contrast-text text-sm">
        &copy; {currentYear}{" "}
        <span className="hover:opacity-90">Rayan Kazi</span>
      </span>
    </footer>
  );
}
