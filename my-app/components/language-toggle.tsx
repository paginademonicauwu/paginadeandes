"use client"

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    router.push(pathname, { locale: newLocale });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-medium"
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Languages className="h-4 w-4 mr-2" />
      {locale === 'es' ? 'EN' : 'ES'}
    </Button>
  );
}
