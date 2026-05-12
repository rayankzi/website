import { getLastCommitDate } from "@/app/actions/github";

export async function Footer() {
  const lastUpdated = await getLastCommitDate();

  return (
    <footer className="mt-auto border-t border-border py-6">
      <p className="text-sm text-neutral-700 dark:text-muted-foreground">
        Last updated {lastUpdated}
      </p>
    </footer>
  );
}
