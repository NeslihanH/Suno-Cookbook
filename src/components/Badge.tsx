import { useTranslation } from "react-i18next";

type Variant = "official" | "community" | "beta" | "free" | "paid";

// Small status pill. `official` prop maps to the official/community pair.
export function Badge({ variant }: { variant: Variant }) {
  const { t } = useTranslation();
  return <span className={`badge badge-${variant}`}>{t(`badge.${variant}`)}</span>;
}

export function OfficialBadge({ official }: { official: boolean }) {
  return <Badge variant={official ? "official" : "community"} />;
}
